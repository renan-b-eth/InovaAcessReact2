
    const Header = () =>{
        return(
            <>
                <header>
                    <div className="content">
                        <nav>
                            <ul className="menu" id="menu">
                            <li><a href="#">Produtos</a></li>
                            <li><a href="#">Industrias</a></li>
                            <li><a href="#">Aprendizados</a>
                                <ul>
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">SEO</a></li>
                                <li><a href="#">Design</a></li>                    
                                </ul>
                            </li>
                            <li><a href="#">Suporte</a></li>
                            <li><a href="#">Empresa</a></li>     
                            <li><a href="#">Acessibilidade</a></li> 
                            <li><a href="#">Integrantes</a></li>    
                            <li><a href="#">Login</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </>
        )
    }
    export default Header;