document.getElementById('addItemButton').addEventListener('click', function() {
   
    let itemText = document.getElementById('itemInput').value;
    if (itemText !== '') {
    
        let li= document.createElement('li');
        li.textContent = itemText;
        
        
        li.addEventListener('click', function() {
            this.remove();
        });
     
        document.getElementById('itemList').appendChild(li);
        
       
        document.getElementById('itemInput').value = '';
    }
});
