function render(data){
    var html = "<div class='comentBox'><div class='leftpanelImg'><img src='images/logo.png' style='width:40px' /></div><div class='rightpanel' required><b><span style='color:#007bff'>"+data.name+"</span></b><span style='font-size:12px'><div class='date'><span>Shared publically on </span>"+data.date+"</div></span><br><p style='font-size:13px'><span style='font-size:13px'><b>Comment: </b></span>"+data.body+"</p></div><div class='clear'></div></div>";
    $('#container').append(html);
}
$(document).ready(function(){

    var coment = [];

    if(!localStorage.comentData){
        localStorage.comentData = [];
    }
        else{
            coment = JSON.parse(localStorage.comentData);
        }

        for(var i=0;i<coment.length;i++){
            render(coment[i]);
                }
                $('#addComent').click(function(){
                    var addObj = {
                        "name": $('#name').val(),
                        "date": $('#date').val(),
                        "body": $('#bodyText').val()
                        
                    };
                    coment.push(addObj);
                    localStorage.comentData = JSON.stringify(coment);
                    render(addObj);
                    $('#name').val('');
                    $('#date').val('');
                    $('#bodyText').val('');
                    
                });
});



    