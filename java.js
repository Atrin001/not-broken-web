// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get the mouse light element
    const mouseLight = document.getElementById('mouseLight');
    
    // Make sure the element exists
    if (!mouseLight) {
      console.error("Mouse light element not found!");
      return;
    }
    
    // Function to update the mouse light position and effect
    function updateMouseLight(e) {
      const { clientX, clientY } = e;
      
      // More intense effect with higher opacity (0.25) and better transparency
      mouseLight.style.background = `radial-gradient(
        600px at ${clientX}px ${clientY}px, 
        rgba(59, 130, 246, 0.25), 
        rgba(59, 130, 246, 0.1) 40%, 
        transparent 70%
      )`;
    }
    
    // Add event listener for mouse movement
    document.addEventListener('mousemove', updateMouseLight);
    
    // Initialize with a default position (center of screen)
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    
    // Set initial mouse light effect
    mouseLight.style.background = `radial-gradient(
      600px at ${initialX}px ${initialY}px, 
      rgba(59, 130, 246, 0.25), 
      rgba(59, 130, 246, 0.1) 40%, 
      transparent 70%
    )`;
    
    // Log success for debugging
    console.log("Mouse light effect initialized successfully");
  });