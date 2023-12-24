import {
  Facebook,
  LinkedIn,
  Twitter,
  HomeOutlined,
  AccountTreeOutlined,
  ContactPhoneOutlined,
  InfoOutlined,
  HomeWorkOutlined,
} from "@mui/icons-material";
// import { useOutletContext } from "react-router-dom";
import images from "@/assets/img";
import Btn from "@/components/Btn";
import Helper from "@/helpers";
import { toast } from "react-toastify";
import { FormEvent } from "react";
import { useStateUpdate } from "@/hooks/useStateUpdate";

const { http, api, errorNarrowing } = Helper;

export default function Sidenav() {
  const { state: { user } } = useStateUpdate();

  const logout = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await http.post(`${api}/auth/logout`);
      toast.success("Logout successful");
      window.location.href = "/";
    } catch (error) {
      toast.error(errorNarrowing(error));
    }
  };

  return (
    <aside className="w-full h-screen z-10">
      <div className="fixed h-full px-5 py-10 w-[calc(100%/6)] bg-default flex flex-col items-center">
        <div className="w-full flex flex-col justify-center items-center space-y-3">
          <img
            src={images.profile}
            alt=""
            className="w-32 h-32 rounded-full relative overlay border-8 border-[#2c2f3f]"
          />

          <label className="font-bold text-xl text-white">
            Nathaniel Obeng
          </label>

          <ul className="flex space-x-5">
            <li>
              <a href="" className="text-white">
                <Facebook fontSize="large" />
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                <LinkedIn fontSize="large" />
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                <Twitter fontSize="large" />
              </a>
            </li>
          </ul>
        </div>

        <nav className="mt-8">
          <ul>
            <li className="p-3 flex text-zinc-400 items-center ">
              <HomeOutlined className="mr-2" /> Home
            </li>
            <li className="p-3 flex text-zinc-400 items-center ">
              <HomeWorkOutlined className="mr-2" /> Experience
            </li>
            <li className="p-3 flex text-zinc-400 items-center ">
              <AccountTreeOutlined className="mr-2" /> Projects
            </li>
            <li className="p-3 flex text-zinc-400 items-center ">
              <InfoOutlined className="mr-2" /> About
            </li>
            <li className="p-3 flex text-zinc-400 items-center ">
              <ContactPhoneOutlined className="mr-2" /> Contact
            </li>
          </ul>
        </nav>

        {user && (
          <form
            className="w-full absolute bottom-0 py-5 flex items-center justify-center"
            onSubmit={logout}
          >
            <Btn className="p-2 w-36 rounded-full bg-danger text-white">
              Logout
            </Btn>
          </form>
        )}
      </div>
    </aside>
  );
}

