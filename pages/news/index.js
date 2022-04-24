import Layout from "../../Component/Layout";
import Counter from "../../Component/Counter";

function NewsPage (props) {
    console.log(props)
    return(
        <Layout {...props}>
            <Counter />
        </Layout>
    )
}

export default NewsPage;