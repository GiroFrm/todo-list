
export function navBar(){
   
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('menu-toggle');
  
    toggleButton.addEventListener('click', () => {
      
      sidebar.classList.add('active');
    });
  
    window.addEventListener("click", (event) => {
      console.log("Window clicked"); // Debugging
      if ( event.target !== sidebar &&
        !sidebar.contains(event.target) &&
        event.target !== toggleButton) {
        sidebar.classList.remove("active");
     
      }
    });

}