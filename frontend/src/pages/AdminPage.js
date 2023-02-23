import React from 'react'
import ADcss from "./AdminPage.module.css"
const AdminPage = () => {
    return (
        <div className={ADcss.mainContainer}>

            <div className={ADcss.firstContainer}>

                <div className={ADcss.logoofmypage}>
                    <img src='/spritsvilla logo.jpg' alt='logod' />
                </div>
                <div >
                    <img className={ADcss.center} src='https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png' alt='Avatar' />
                </div>
                <div className={ADcss.Nameofperson}>Sachin Pandey</div>
                <p className={ADcss.position} >Deputy manager</p>
                <div className={ADcss.Sidebarfirstsection}>
                    <div>
                        DASHBOARD
                    </div>
                </div>
                <div className={ADcss.Sidebarsecondsection}>
                    <div>
                        Edit the Products
                    </div>

                </div>
                <div className={ADcss.Sidebarsecondsection}>
                    <div>
                        Shipped
                    </div>

                </div><div className={ADcss.Sidebarsecondsection}>
                    <div>
                        Todays Order
                    </div>

                </div><div className={ADcss.Sidebarsecondsection}>
                    <div>
                        Collections
                    </div>

                </div>
                <div className={ADcss.logoutcombo}> <div>
                    <img src='/icons8-logout-rounded-100.png' alt='logoutavatar' /></div>

                    <div>
                        Logout
                    </div>
                </div>
            </div>
            <div className={ADcss.secondContainer}>
                
            </div>
        </div>
    )
}

export default AdminPage