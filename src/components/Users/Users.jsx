import React from 'react'
import s from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
    props.setUsers([
        {
            id: 1,
            photoUrl: 'https://pyxis.nymag.com/v1/imgs/8a2/7e9/cce3b7c5215ef9549c819a224ce89a12a7-tom-hanks.rsquare.w1200.jpg',
            followed: true,
            fullName: "Mark N.",
            status: "I am a creator!",
            location: { city: "null", country: "null" },
          },
          {
            id: 2,
            photoUrl: 'https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2020-07/gettyimages-1168898614.jpg?h=2e111cc1&itok=ekx8p11w',
            followed: false,
            fullName: "Alex D.",
            status: "jocker",
            location: { city: "Moscow", country: "Russia" },
          },
          {
            id: 3,
            photoUrl: 'https://secure-journal.hautehorlogerie.org/wp-content/uploads/2018/10/Dwayne-Johnson-d.jpg',
            followed: true,
            fullName: "Robert S.",
            status: "I serach a job, help",
            location: { city: "Brooklyn", country: "USA" },
          },
          {
            id: 4,
            photoUrl: 'https://i.pinimg.com/originals/f4/49/49/f4494972dc3a094153a631a95465640b.jpg',
            followed: false,
            fullName: "Linda A.",
            status: "fck me",
            location: { city: "London", country: "United Kingdom" },
          },
          {
            id: 5,
            photoUrl: 'https://www.abouther.com/sites/default/files/styles/760x506/public/2017/07/23/main_rexfeatures_10241376fn.jpg?itok=iiZimbM7',
            followed: true,
            fullName: "Jessica A.",
            status: "Qeen",
            location: { city: "Sain Petersburg", country: "Russia" },
          },      
    ])
}

    return (
        <div className={s.wrapper_users}>
            {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} />
                    </div>
                    <div>
                        {u.followed ?
                        <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                        <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div> )
            }
        </div>
    )
}

export default Users