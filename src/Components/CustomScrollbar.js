import { useState, useRef, useEffect, useCallback } from "react";
import "./CustomScrollbar.css";

function CustomScrollbar({ scrollRef }) {
  const trackRef = useRef(null);
  const [thumbLeft, setThumbLeft] = useState(0);
  const isDraggingRef = useRef(false);
  const dragOffsetRef = useRef(0);
  const thumbWidthPercent = 20; // Must match CSS thumb width

  // Update thumb when content scrolls
  useEffect(() => {
    if (!scrollRef?.current) return;
    const el = scrollRef.current;
    const handleScroll = () => {
      const ratio = el.scrollLeft / (el.scrollWidth - el.clientWidth);
      // Account for thumb width so it doesn't overflow the track
      setThumbLeft(ratio * (100 - thumbWidthPercent));
    };
    // Initialize thumb position
    handleScroll();
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  // Handle thumb dragging
  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current || !scrollRef?.current || !trackRef.current) return;
    const track = trackRef.current.getBoundingClientRect();
    // Account for where the user clicked on the thumb
    const clickPosition = e.clientX - track.left - dragOffsetRef.current;
    // Account for thumb width - the thumb can only move within (100 - thumbWidth)% of the track
    const availableWidth = track.width * (100 - thumbWidthPercent) / 100;
    const ratio = Math.max(0, Math.min(1, clickPosition / availableWidth));
    scrollRef.current.scrollLeft =
      ratio * (scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
  }, [scrollRef]);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    dragOffsetRef.current = 0;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!trackRef.current) return;
    
    // Calculate where on the thumb the user clicked
    const thumb = e.currentTarget;
    const thumbRect = thumb.getBoundingClientRect();
    dragOffsetRef.current = e.clientX - thumbRect.left;
    
    isDraggingRef.current = true;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div className="scroll-track" ref={trackRef}>
      <div
        className="scroll-thumb"
        onMouseDown={handleMouseDown}
        style={{ left: `${thumbLeft}%` }}
      />
    </div>
  );
}

export default CustomScrollbar;
