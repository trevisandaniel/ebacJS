$(document).ready(function(){
    
    $('.content button').click(function(){
        //alert('clicou em adicionar');
    })

    $('.content').on('submit',function(e){
        e.preventDefault(e);
        
        const newTask = $('#task_id').val();
        const addTask = $('<li></li>');
        $(`<p>${newTask}</p>`).appendTo(addTask);
        $(addTask).appendTo('ul')

        $('#task_id').val('');

        $('li').click(function() {
            $(this).css('text-decoration', 'line-through');
          });
    });
});
