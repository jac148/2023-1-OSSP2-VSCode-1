
<?php
        $hostname = "YourHostname";
        $username = "YourUsername";
        $password = "YourPassword";
        $dbname = "YourDatabaseName";
        
        $conn = mysqli_init();
       
        mysqli_real_connect($conn, $hostname, $username, $password, $dbname, 3306, NULL, MYSQLI_CLIENT_SSL);

        //If connection failed, show the error
        if (mysqli_connect_errno())
        {
            die('Failed to connect to MySQL: '.mysqli_connect_error());
        }

        $api_key = "YourKey";
        $api_url = "http://swopenAPI.seoul.go.kr/api/subway/".$api_key."/json/realtimePosition/0/5/1호선";  // 가져올 API의 URL - 지하철 실시간 위치

        $ch = curl_init(); // curl init
        curl_setopt($ch, CURLOPT_URL, $api_url); // Set the option to return the response as a string instead of outputting it directly
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // Curl을 사용해 HTTP 호출 문제 해결
        $response = curl_exec($ch);

        if (curl_errno($ch)) {
            $error = curl_error($ch);
            // Handle the error appropriately
            // For example, you can log the error or display a message to the user
        } else {
            // Process the response data
            // You can manipulate or extract specific information from the response here
        
            // Close the cURL handle
            curl_close($ch);
        
            // Pass the response back to the HTTPS-based server or perform any other required actions
        }
?>