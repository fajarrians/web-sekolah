<?php

namespace Database\Seeders;

use App\Models\Visimisi;
use Illuminate\Database\Seeder;

class VisimisiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = $this->data();
        Visimisi::upsert($data, ['visimisi']);
    }
    public function data(){
        return[[
            'visimisi' => '<h1 style="text-align: left;"><span style="font-size: x-large;">Visi &amp; Misi</span></h1><div><span face="&quot;Open Sans&quot;, Arial, sans-serif" style="background-color: white; font-size: 14px; text-align: justify;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span></div><div><h1><span style="font-size: x-large;">Visi &amp; Misi</span></h1><div><span face="&quot;Open Sans&quot;, Arial, sans-serif" style="background-color: white; font-size: 14px; text-align: justify;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span></div></div><div><span face="&quot;Open Sans&quot;, Arial, sans-serif" style="background-color: white; font-size: 14px; text-align: justify;"><br /></span></div><div><h1><span style="font-size: x-large;">Visi &amp; Misi</span></h1><div><span face="&quot;Open Sans&quot;, Arial, sans-serif" style="background-color: white; font-size: 14px; text-align: justify;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span></div></div><div><span face="&quot;Open Sans&quot;, Arial, sans-serif" style="background-color: white; font-size: 14px; text-align: justify;"><br /></span></div><div><span face="&quot;Open Sans&quot;, Arial, sans-serif" style="background-color: white; font-size: 14px; text-align: justify;"><br /></span></div><div><span face="&quot;Open Sans&quot;, Arial, sans-serif" style="background-color: white; font-size: 14px; text-align: justify;"><br /></span></div>'
        ]];
    }
}
