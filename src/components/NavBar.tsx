const NavBar = () => {

    return (
        <div className="flex justify-around items-center text-3xl text-white h-fit">
            <div className="flex items-center">
                <img src="https://theme.zdassets.com/theme_assets/2197739/df1f3a3595ad6f2e809942c0cbfa85f84156dd61.svg" alt="logo" className="w-20 h-20" />

                <span className="text-gray-400">|</span>
                <h2 className="ml-1">Help Center</h2>
            </div>

            <div className="flex items-center text-2xl">
                <button className="mr-4 border rounded border-white px-4 py-2">Submit a request</button>
                <button className="border-transparent rounded bg-blue-400 px-6 py-2 hover:bg-white hover:text-black">Sign in</button>
            </div>
        </div>
    );
}

export default NavBar;