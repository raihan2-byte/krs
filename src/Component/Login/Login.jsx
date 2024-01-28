import React from "react";
import Logo from "../../assets/picture/Logo_Unika_Atma_Jaya.png";

const Login = () => {
  return (
    <div className="bg-[#FF6E02] flex flex-col justify-center text-white">
      <img src={Logo} alt="" className="w-1/4 m-auto" />
      <div className="w-[20%] m-auto">
        <div className="">
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            User Id
          </label>
          <input type="text" id="first_name" className="h-8 w-full" required />
        </div>
        <div>
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input type="text" id="first_name" className="h-8 w-full" required />
        </div>
      </div>
      <a href="/home">
      <button className="bg-[#74C998] flex justify-center w-[5%] m-auto my-5 text-black">
        Sign In
      </button>
      </a>
      
      <div class="flex items-center justify-center  mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-center"
        />
        <label for="default-checkbox" className="ms-2 text-sm text-center">
          Enable Accessibility Mode
        </label>
      </div>
      <div className="text-center">
      <div>Jadwal Pendaftaran KRS (Enrollment) Semester Genap 2023-2024 Secara Online</div>
      <br />
      <div>Pengumuman Pengisian Umpan Balik Perkuliahan (Susulan) Semester Ganjil 2023-2024</div>
      <br />
      <div>Addendum SK Kalender Akademik 2023-2024</div>
      <br />
      <div>Buku Pedoman Perilaku Mahasiswa</div>
      <br />
      <div>SK Penetapan Buku Saku Mahasiswa Tahun Akademik 2023-2024</div>
      <br />
      <div>SK Kalender Akademik 2023-2024</div>
      <br />
      <div>Pengumuman Update Data Mahasiswa Baru Angkatan 2022</div>
      <br />
      <div>Panduan Membuat Cicilan untuk Calon Mahasiswa Baru (Payment Plan)</div>
      <br />
      <div>Panduan Upload Dokumen</div>
      <br />
      <div className="text-[10px]">Best view with Google Chrome.</div>
      <br />
      </div>
    </div>
  );
};

export default Login;
