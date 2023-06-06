
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

        $api_url = "https://apis.openapi.sk.com/puzzle/subway/stations";
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $api_url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_HEADER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
          'accept: application/json',
          'appkey: YourKey'
        ));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        
        //var_dump($response);

        if (curl_errno($ch)) {
          $error = curl_error($ch);
        }
        
        
        
        // api values parse
        $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
        $response_body = substr($response, $header_size);
        $data = json_decode($response_body, true);
        if ($data === null) {
          // JSON 파싱 실패 처리
      } else {
        print_r($data);
          // $data 배열을 사용하여 원하는 작업 수행
      }
          
        curl_close($ch);
?>