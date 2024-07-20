const Card = ({header, subheader}) => {
    return ( 
        <div className="text-white flex flex-col items-center w-full md:w-[25%] lg:w-[15%]">
            <p className="text-xl font-bold">{header}</p>
            <p className="text-xl font-bold">{subheader}</p>
            <p className="text-center text-xs mt-2 text-balance">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad iusto odio earum ipsa distinctio nobis animi perferendis accusamus doloribus minus nam</p>
            <div className="p-2 rounded-full bg-orange-600 mt-4">
                <p className="text-sm text-white font-bold">GET STARTED</p>
            </div>
        </div>
    );
}
 
export default Card;