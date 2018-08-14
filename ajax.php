<?php
header('Access-Control-Allow-Origin:*'); // 设置为允许跨域 则本文件可中转任意请求
header('Content-Type: text/html; charset=UTF-8'); // 设置返回页面字符集
class ajax
{
	private $finalTargetUrl = ''; // 最终请求 URL
	private $finalTargetReferer = ''; // 是否附带 Referer 参数
	private $finalGet = ''; // 最终 Get 参数
	private $finalPost = ''; // 最终 Post 参数
	
	public function start()
	{
		$this->handlePostRequest(); // 处理 Post 请求
		$this->handleGetRequest(); // 处理 Get 请求
		$this->getResponse(); // 获取目标并显示结果
	}
	
	private function handlePostRequest()
	{
		$rawPost = file_get_contents("php://input"); // 读取 Post 请求数据，如果来源不是 Post 请求则为空
		$rawPost = explode('&', $rawPost); // 以 & 拆分成键值对数组
		$finalPost = array();
		foreach ($rawPost as $item) {
			$item = explode('=', $item); // 以 = 拆分成键和值
			if (isset($item[1])) {
				$finalPost[$item[0]] = $item[1];
			} else {
				$finalPost[$item[0]] = '';
			}
		}
		if (isset($finalPost['target_url'])) {
			$this->finalTargetUrl = urldecode($finalPost['target_url']); // 读取目标 URL
			unset($finalPost['target_url']); // 从最终 Post 请求数组中移去
		}
		if (isset($finalPost['target_referer'])) {
			$this->finalTargetReferer = urldecode($finalPost['target_referer']); // 读取目标 Referer
			unset($finalPost['target_referer']); // 从最终 Post 请求数组中移去
		}
		foreach ($finalPost as $key => $value) {
			$this->finalPost .= $key . '=' . $value . '&'; // 生成最终 Post 参数，如果来源不是 Post 请求会有一组空键值对 &=
		}
	}
	
	private function handleGetRequest()
	{
		if (count($_GET) > 0) { // 判断是否是 Get，如果来源不是 Post 请求则退出函数
			$finalGet = array();
			foreach ($_GET as $rawGetKey => $rawGetValue) { // 读取 Get 请求数据
				if ($rawGetKey == 'target_url') { // 读取目标 URL
					$this->finalTargetUrl = urldecode($rawGetValue); // 读取目标 Referer
				} else if ($rawGetKey == 'target_referer') {
					$this->finalTargetReferer = urldecode($rawGetValue);
				} else {
					$finalGet[] = $rawGetKey . '=' . urlencode($rawGetValue); // 读取 Get 参数
				}
			}
			$this->finalGet = implode('&', $finalGet); // 生成最终 Get 参数
			$this->finalTargetUrl .= '?' . $this->finalGet; // 拼接成最终请求 URL
		}
	}
	
	private function getResponse()
	{
		if (empty($this->finalTargetUrl)) { // 如果没有设置 target_url 则本程序没有意义
			echo '/*  You should put "target_url" with your target url in request to use this php */';
			return;
		}
		$curl = curl_init(); // 初始化 curl
		curl_setopt($curl, CURLOPT_URL, $this->finalTargetUrl);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);
		curl_setopt($curl, CURLOPT_TIMEOUT, 10);
		curl_setopt($curl, CURLOPT_DNS_CACHE_TIMEOUT, 1800);
		curl_setopt($curl, CURLOPT_HEADER, 0);
		if (strlen($this->finalPost) > 2) { // 如果来源不是 Post 请求会有一组空键值对 &=
			curl_setopt($curl, CURLOPT_POST, 1);
			curl_setopt($curl, CURLOPT_POSTFIELDS, $this->finalPost);
		}
		if (strlen($this->finalTargetReferer) > 0) {
			curl_setopt($curl, CURLOPT_REFERER, $this->finalTargetReferer); // 设置 Referer
		}
		$response = curl_exec($curl); // 获取目标
		curl_close($curl);
		
		/* 调试 - 打印信息 */
//		var_dump($this->finalTargetUrl);
//		var_dump($this->finalTargetReferer);
//		var_dump($this->finalGet);
//		var_dump($this->finalPost);
		
		echo $response;
	}
}
$ajax = new ajax();
$ajax->start();