import Card from "./Card"


const data = [
    {
        path: 'https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png',
        title: "Using Abstract",
        description: "Abstract lets you manage, version, and document your designs in one place."
    },
    {
        path: 'https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png',
        title: "Using Abstract",
        description: "Abstract lets you manage, version, and document your designs in one place."
    },
    {
        path: '	https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png',
        title: "Using Abstract",
        description: "Abstract lets you manage, version, and document your designs in one place."
    },
    {
        path: 'https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png',
        title: "Using Abstract",
        description: "Abstract lets you manage, version, and document your designs in one place."
    },
    {
        path: '	https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png',
        title: "Using Abstract",
        description: "Abstract lets you manage, version, and document your designs in one place."
    },
    {
        path: 'https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png',
        title: "Using Abstract",
        description: "Abstract lets you manage, version, and document your designs in one place."
    },
]


const Content = () => {
    return (
        <div className="flex flex-wrap justify-around">
            {data.map((props) => {
                return <Card {...props} />
            })}
        </div>
    )
}

export default Content