import { useState, useEffect } from "react";

/**
 * Custom hook that tracks which section is currently "active"
 * based on visibility in the viewport.
 *
 * @param {string[]} sectionIds - Array of DOM element IDs to observe
 * @returns {string|null} activeId - The ID of the most visible section
 */
export default function useActiveSection(sectionIds = []) {
  // Stores the ID of the currently active section
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    // Resolve IDs into actual DOM elements, ignoring any that don’t exist
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    // If no valid elements are found, do nothing
    if (elements.length === 0) return;

    // Create an IntersectionObserver to watch section visibility
    const observer = new IntersectionObserver(
      (entries) => {
        // Get only entries currently intersecting the viewport
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          // Sort by visibility amount (largest intersection first)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        // If at least one section is visible,
        // mark the most visible one as active
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries[0];
          setActiveId(topEntry.target.id);
        }    
      },
      {
        // Use very fine-grained thresholds (0.00 → 1.00)
        // so visibility changes feel smooth and accurate
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),

        // Adjust viewport margins so:
        // - section counts as active slightly before it reaches the top
        // - section stops counting before it fully leaves the bottom
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    // Start observing each section element
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount or when sectionIds change
    return () => observer.disconnect();
  }, [sectionIds]);

  // Expose the currently active section ID to consumers
  return activeId;
}