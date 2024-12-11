import { setUpRemoveProject } from "./setupEventListeners";
// Function to create and append the dialog window
export function createDialog(projectName) {
    // Create the dialog container
    const dialog = document.createElement('div');
    dialog.id = 'dialog';
    dialog.className = 'dialog';
    const dialogContent = document.createElement('div');
    dialogContent.className = 'dialog-content';
    const title = document.createElement('h4');
    title.textContent = 'Delete project?';
    const message = document.createElement('p');
    message.textContent = 'The Home project and all of its tasks will be permanently deleted.';
    const btnsContainer = document.createElement('div');
    btnsContainer.className = 'btns-container';
    const cancelButton = document.createElement('button');
    cancelButton.id = 'cancel-button';
    cancelButton.className = 'btn-primary';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', ()=>{
        dialog.style.display = 'none'; 
    })
    const confirmButton = document.createElement('button');
    confirmButton.id = 'confirm-button';
    confirmButton.className = 'btn-primary btn-addtask';
    confirmButton.textContent = 'Delete';
    confirmButton.addEventListener('click', ()=>{
    setUpRemoveProject(projectName)
    dialog.style.display = 'none'; 
    })
    btnsContainer.appendChild(cancelButton);
    btnsContainer.appendChild(confirmButton);
    dialogContent.appendChild(title);
    dialogContent.appendChild(message);
    dialogContent.appendChild(btnsContainer);
    dialog.appendChild(dialogContent);
    document.body.appendChild(dialog);
  }


// document.addEventListener('DOMContentLoaded', (event) => { 
//     const dialog = document.getElementById('dialog');
//      const openButton = document.getElementById('open-dialog'); 
//      const closeButton = document.getElementById('close-button');
//       const confirmButton = document.getElementById('confirm-button'); 
//       // Open the dialog when the button is clicked 
//       openButton.addEventListener('click', () => { 
//         dialog.style.display = 'block'; 
//     }); 
//     // Close the dialog when the close button is clicked 
//     closeButton.addEventListener('click', () => { 
//         dialog.style.display = 'none'; 
//     }); 
//     // Optionally, handle confirm button click 
//     confirmButton.addEventListener('click', () => { 
//         console.log('Confirm button clicked'); 
//         dialog.style.display = 'none'; 
//     }); // Close the dialog when clicking outside of the dialog content
//      window.addEventListener('click', (event) => {
//          if (event.target === dialog) { 
//             dialog.style.display = 'none'; 

//          }
//  }); });
  
