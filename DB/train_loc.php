
<?php
        $hostname = "YourHostname";
        $username = "YourUsername";
        $password = "YourPassword";
        $dbname = "YourDatabaseName";
        
        $conn = mysqli_init();
       
        // MySQLi 객체 생성 및 연결 설정
        mysqli_real_connect($conn, $hostname, $username, $password, $dbname, 3306, NULL, MYSQLI_CLIENT_SSL);

        //If connection failed, show the error
        if (mysqli_connect_errno())
        {
            die('Failed to connect to MySQL: '.mysqli_connect_error());
        }

        $train_location_api_key = "YourKey";
        $api_url = "http://swopenAPI.seoul.go.kr/api/subway/".$train_location_api_key."/json/realtimePosition/0/5/1호선";  // 가져올 API의 URL

        $ch = curl_init(); // curl init
        curl_setopt($ch, CURLOPT_URL, $api_url); // Set the option to return the response as a string instead of outputting it directly
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // HTTP 호출 문제 해결
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

        $data = json_decode($response, true); // api values parse
        $tableName = "지하철 위치";
        $trunc_sql = "TRUNCATE TABLE `$tableName`";
        if ($conn->query($trunc_sql) === TRUE) {
          echo "Table $tableName has been truncated successfully.";
      } else {
          echo "Error truncating table: " . $conn->error;
      }
        // "지하철 위치" 테이블에 데이터 삽입
        foreach ($data["realtimePositionList"] as $item) {
          $btrainNo = $item["trainNo"];
          $trainLineNm = $item["statnTnm"];
          $statnFid = $item["statnId"];
          $statnTid = $item["statnTid"];
          $arvlCd = $item["trainSttus"];
  
          $sql = "INSERT INTO `$tableName` (`btrainNo`, `trainLineNm`, `statnFid`, `statnTid`, `arvlCd`) 
              VALUES ('$btrainNo', '$trainLineNm', '$statnFid', '$statnTid', '$arvlCd')";
  
          if ($conn->query($sql) !== true) {
          echo "Error inserting data: " . $conn->error;
      }
      $conn->close();
}
?>