import React from 'react'
import ADcss from "./AdminPage.module.css"
const AdminPage = () => {
    return (
        <div className={ADcss.container}>
            <div className={ADcss.spritsvilla}>SpritsVilla</div>
            <div className={ADcss.bodyofadmin}>
                <div>
                    <div className={ADcss.logo}> </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default AdminPage