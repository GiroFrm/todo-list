import { format, parseISO } from 'date-fns'; 
export function formatDueDate(dueDate) {
     const date = parseISO(dueDate); 
     const dayNumber = format(date, 'd'); 
     const abbreviatedMonthName = format(date, 'MMM'); 
     
}
    
    export function resetForm(form) { 
        form.reset(); 
    }