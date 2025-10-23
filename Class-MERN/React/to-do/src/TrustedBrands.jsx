function TrustedBrands(props){
    return (
        <div className="flex-col items-start">
            <h1 className="font-semibold text-xl">
                Trusted Brands
            </h1>
            {
                props.trustedBrands.map((brand)=>{
                    return(
                        <h1 className=" font-bold text-4xl text-black" key={brand.id}>
                           {brand.logo}
                        </h1>
                    )
                })
            }

        </div>
    )
}

export default TrustedBrands;