import ToggleTheme from "../ToggleTheme/ToggleTheme";


export default function Header({ textheader }) {
 return (
   <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5 ">
     <span className="text-gray-100"></span>
     <h1>{textheader}</h1>
     <ToggleTheme />
   </div>
 );
}
