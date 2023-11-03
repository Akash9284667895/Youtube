import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YouTube_Search_Api } from "../utils/constants";

const Header = () => {
  const [searchQuery,setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  useEffect(()=>{
const timer = setTimeout(()=>getSearchSuggestion(),200);

return ()=>{
  clearTimeout(timer);
}
  },[searchQuery]);

  const getSearchSuggestion =async()=>{
    console.log("API CALL"+searchQuery);
const data = await fetch(YouTube_Search_Api+searchQuery);
const json= await data.json();
setSuggestion(json[1]);
  }
  const dispatch = useDispatch();

  const toggleMenuHandler =()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-xl">
      <div className="flex col-span-1">
        <img
        onClick={()=>toggleMenuHandler()}
          className="h-11 mx-3 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAXVBMVEUAAAD///8iIiLo6Oi/v7/d3d3r6+sQEBD09PQ3NzdeXl6tra0eHh47OzszMzNvb2+RkZF4eHhBQUHOzs4JCQnV1dXHx8e4uLhkZGSgoKCnp6dpaWmXl5dJSUlXV1fz+ejuAAADeUlEQVRogc2b67qqIBBAxzRFSe1idtnt/f6PecTqVIrMoMC0fvu5iJDLMAPRDMQxkdtdUa4yAMhWZbHbyuQo5rwKrNWyzjegY5PX0roRVv70VO+16hf7+pT68Qv5g7ifnCW9F6j+tibK79StS7+QlZVdUdE6geAXF3u7Ir8QWoD7ZT7L3rdALvYn8+2KEhsHZn9cLLIrini+/9os1nfz43WmPz07sCtMXTDtbzNHeoBmehRM+rfO7IqtpV8sH3if/E3MBXp/Om/GMVHplyWtf61fYJexWVP9Bxef3ZjmQPMnXuyKhOI/eNMDjHtg5F/76fw7zWgMDP2pj6H3YjP8CgZ+4f7D+6QSRv+fZ323GJj8biddPdtpfxtAD9BO+VN3K56JLJ3wu15zpij0/msgPcBV5499TjyfZLHGH6r3FcXY72/V0ZGM/Mv2+bbkQ78MqgeQn34R9ue/1oGH/xJYD3B595OWvRUdwtty8ebH//19EtuQYHGa5wi4+9Gf/xPZggZrqpcfXff21vooQnug/e9HYzuajSsKOqHVT7/AngTzGV5PjL5VPPzo6NvM8qM7Wfnw4+d87dEJYY2+9Xz3p+iDcJvhv+GvTXv/CX9Qf3Y0/3zCQeLU+ymRzcq2AWvKjForv8CnKsVOJnTkjvTOvej8R9Kjfjh2/tAr/zuy89sFtt1Sd/7QO493ygiE3wO3mY0AzuHXDUAIu+8ekgDn8O8+AAhx5J9mC7SZyhc7IB77Vrfjms7xRtkCdxRQkp77tbpU7Eh/Se8tgdTQlf3drqC9GEgxF/weawzpwyJGfPzsvzpoMQ9P+086Hn8/9//PPf65v3/u+Y97/ude/7jXf+79D/f+j3v/y7r/z7/g/MN9/uM+/3Kf/7njH+zxH+74F3f8jz3+yR3/5Y5/s8f/8TXIw/3H/QrwO+5/SNd/Hu+/uO//2O8/ue9/o4h2DnNFGQ39YXJfnrQjP3f+QxSHyb5RaPM/Ag7Bt3DGF+X/sOc/ced/see/hRgCxvw/9vxH7vxP9vxX9vxf9vxn9vxv9vx39vx/D/UPhVX9Q8Rd/xE5rX/JZtS/uKz/MVweGOufpIsuyIyXN19d/9XRsta/KRbU/1XL6/8iVf84rwWO6h9VC2b0gbv6zx7W+tce3vrfHtb65zuq/rvUx1f813+/GvGsf2+gWVb//g+4XjB4qkVQcwAAAABJRU5ErkJggg=="
        />
        <a href="/">
        <img
          className="h-12"
          alt="youtub-logo"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-970-80.jpg.webp"
        />
        </a>
      </div>
      <div className="col-span-10 py-1 my-1 mt-1">
        <div>
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full">
          🔎
        </button>
      </div>
      <div className="fixed bg-white py-2 px-5 w-[28rem] shadow-lg rounded-lg border boreder-gray-100">
        <ul>
          
          {suggestion.map((s)=>(
            <li className="py-2 shadow-sm hover:bg-gray-100">🔎 {s}</li>
          ))}
        </ul>
      </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-11"
          alt="User-logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAY1BMVEUAAAD////7+/v39/fQ0NCVlZW1tbUdHR3e3t7z8/O7u7vt7e1+fn6kpKTJycmqqqpwcHBERERLS0s8PDzBwcEmJiZkZGQxMTFYWFienp4TExMZGRlpaWnX19fl5eVSUlKGhoblN0JgAAAEF0lEQVRogeWb15riMAxGTXojBQgMAULe/yl38rGzQ2LJllzCxf73cIgtKWqInZGy4lodLoMY+mMbJ4/A7Ft2gv+RsG57sdTtXJSb0Mv4KCBdqsw7PYzXj/2miv38PPpJwZ6190gP7mr2t468x2fQH/CFr3TyQ69vFLgQjQ/6icb+VuyeHpHhQlxd0x8MOMP0afRR42lrRS7pwRcPLm5ExyPRYyZciLs7+siGC1E4ox8M6H3uiF4bwIleT6BzTe6lNHRC57n6ryhOr6dPhvSLC3p+MaSL0QGdE+CXItidls6PND86O6A/jelCb/U6eml87ULok1wd3dTfZumTLB3dLNC9pM8ydPTEgj59lF5Z0xsLevsf0+1P/rNWZ+Nx+kDvM9ok1nSbSPuwphullH9l/5bZVcbwpxaup5ubnYvsoiSW7bIIxZw+q2xN6Xo4gW569JRyQk8PSO0aWYSUllLLmAVbfZCn0XcmdjdQHp1EN7l5Wu+G1D3gm31HqSGJ9JxtePoQT6ezyylqx5DYMePZvT6l4tF3ewac2DJi0BnVZEufk9C7xNSnrxhDGkaHnHb3jB4xbzqQEbIsVnueORmZNOyW1KUzpe+ys4J9qHlfZjARizD+oeDPBA2mgdlVvv90ojbFbenzD0im7h/52DbEsM6nl3VyjacYutJ8zEa4EX/6/kSTRFobVNKDaLoMP9dKP9ri52ZuXazuHCnoedMt7raiudPKLb5OCmPE6YlkWxdKKJED8hM/NYyeg33xVpeyjGDZh2aYCB1N5ZR5Q4C9CFPk+mG6ol/SoQEtSPC5WQqfPkhXv82+EsjNxn2n+lAKhgSIru1XpG29NOSw0A7HB8hkAHo+6L5p1j0uHnkYhHmUxKTJzYFGN5sC6QXkHTLdpkOnlnz1Er1kDnwZekpRT6JP3uDAeHRNLz3C5SHZmm7eoqJoHSlX9NwrXKRq+tUvfd3HWtGV0dKBKhU98wxfd0+XdL82NyvB6aFFS5ioFqf7P3hxzFG6vxD/qwdKVxVprrTH6IFvf5t1xugZKa2wVBcgdPoSm4WGDKH7DrMv1QhdvzbpQg1CN2zEM1XB9CDdhH6A6RtEulk9TDffrGHpfQHrjb6Jw4nFKsobfYsoPyv6KL0G6eY7TTwVIN1/YvNSAtKNR55MNSB9m0CL0bfILT5P3//HdPjkP2vzn402NktNHMFx3mapiaGhBOnlFgn1sn3yntdtUUwsN8/e6du8YiOEvk0tEyL0TTwerSK3yGp7vH7fIOAsRztLemCxy0fSaidi1TEz+XMKQ32gpPtN6tP1ApLUo/aI76XtJ3k6MPoqZc/yZAaYjASTD/YATfLAiVh2dx310gkcViOzyCx26Xtdg/xjDZ8CZ0XcdqndIQzps7qe8FW7P2kjNCqWGnEfAAAAAElFTkSuQmCC"
        />
      </div>
    </div>
  );
};

export default Header;
