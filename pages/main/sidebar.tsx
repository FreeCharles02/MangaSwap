import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useSession, signIn, signOut } from "next-auth/react";

const MainBar = () => {
  const {data: session} = useSession();
    return (
<Sidebar className="h-100">
  <h1>
    Mangakure
  </h1>
  <Menu>
    <SubMenu label="Profile">
      {session ? 
      <>
      <MenuItem>
      <Link href="/main/vault">
      Vault
      </Link> 
       </MenuItem>
      <MenuItem> Cart </MenuItem>
      <MenuItem onClick={() => signOut()}> Logout </MenuItem>  
      </>
      :
      <>
      <MenuItem onClick={() => signIn()}> Login </MenuItem>
      <MenuItem onClick={() => signOut()}> Signup </MenuItem>
      </>
       }
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>
  );
};
    


export default MainBar;