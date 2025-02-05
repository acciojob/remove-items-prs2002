//your JS code here. If required.
function removeSelectedColor() {
            var select = document.getElementById('colorSelect');
            var selectedIndex = select.selectedIndex; // Get the index of the selected option
            
            if (selectedIndex !== -1) { // Check if an option is selected
                select.remove(selectedIndex); // Remove the selected option
            }
        }