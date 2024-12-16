<<<<<<< HEAD
const ListShow = ({ list }) => {
    return (
        <>
            {
                list.map((item) => (
                    <li key={item}>{item}</li>
                ))
            }

        </>
    );
}

=======
const ListShow = ({ list }) => {
    return (
        <>
            {
                list.map((item) => (
                    <li key={item}>{item}</li>
                ))
            }

        </>
    );
}

>>>>>>> 35baf4ca7e2dc516a592856f69a251a0dd1a258f
export default ListShow;