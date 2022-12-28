<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ListController extends Controller
{
 public function index(){
  return response()->json(
   [
    "post" => 
     [
      "title" => "タイトルです",
      "content" => "投稿内容です投稿内容です投稿内容です投稿内容です投稿内容です。"
     ],
     [
      "title" => "タイトルです",
      "content" => "投稿内容です投稿内容です投稿内容です投稿内容です投稿内容です。"
     ],
     [
      "title" => "タイトルです",
      "content" => "投稿内容です投稿内容です投稿内容です投稿内容です投稿内容です。"
     ],
    ],
    200,[],
    JSON_UNESCAPED_UNICODE //文字化け対策
   );
  }
 }