// Function to add journal entry
function addEntry() {
    const entryText = document.getElementById('journal-entry').value.trim();

    if (entryText !== '') {
        // Create a new list item for the entry
        const li = document.createElement('li');
        li.textContent = entryText;

        // Append the new entry to the list
        document.getElementById('entry-list').appendChild(li);

        // Clear the textarea after adding the entry
        document.getElementById('journal-entry').value = '';
    } else {
        alert('Please write something before adding an entry.');
    }
}
