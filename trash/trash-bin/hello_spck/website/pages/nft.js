import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  return (
    <>
        
        <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
            />
           <title>BattleBoll</title>
           
           <link rel="stylesheet" href="/ui/globals.css"/>
           <link rel="stylesheet" href="/ui/component/thailand/thailand_ui_1o9.css"/>
            
        </Head>
      
        <Script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript" />
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
        <Script type="module" src="/ux/globals.js" />
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      {/* Backdrop */}
      <div className="backdrop" />
      {/* Version_Container */}
      <div className="version_container">
        <h2>Ping</h2>
        <h2>Fps</h2>
        <h2>Version:1.0</h2> </div>
      {/* Navbar */}
      <nav id="navbar N" className="navbar ">
        <ul id="navbar_ul" className="navbar_ul">
          <div className="navbar_left" id="navbar_left">
            <div className="logo_container potla_poda_logo"> <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/blockchain/avalanche.jpg" alt="e" className="logo" />
              <h2 className="logo_text">BattleBoll</h2> </div>
          </div>
          <div className="navbar_center" id="navbar_center"> </div>
          <div className="navbar_right" id="navbar_right">
            <li className="connect_wallet madarchod_thailand_launch_button_container pnt_li navbar_list balance_list blockchain_balance_nav navbar_li pnt_li4">
              <h3 className="blockchain_wallet_address madarchod_thailand_launch_button_item blockchain_address">Connect Wallets To Start</h3> </li>
            <li className="pnt_li navbar_list theme_list navbar_li pnt_li4 ">
              <div id="pnt_it5" className="pnt_it pnt_tt">
                <ion-icon name="add" />
              </div>
            </li>
          </div>
        </ul>
      </nav>
      {/* ////////////////////// Main Start ⭐⭐⭐ ////////////////////// */}
      <main className="M">
        {/* Hero Start */}
        <div id="main_container" className="space-y-0.5 main_container">
          <div className=" player_container nft_container_big">
            <div className="player_name_container nft_container">
              <h1>Select your Nft</h1>
              <div className="player_name nft_container_small">
                <div className="nfts">
                  <div className="nfts_top">
                    <h1 className="nft_name">Disco Ball ⭐⭐</h1>
                    <div className="nfts_top_details"> <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/battlebol/disco.png" alt="e" />
                      <div className="nfts_top_details_bottom">
                        <h1 className="nft_rararity">Rare</h1>
                        <h1 className="nft_level">Level9</h1> </div>
                    </div>
                  </div>
                  <div className="nfts_bottom">
                    <div className="nfts_choose_button">Choose Ball</div>
                  </div>
                </div>
                <div className="nfts">
                  <div className="nfts_top">
                    <h1 className="nft_name">Disco Ball ⭐⭐</h1>
                    <div className="nfts_top_details"> <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/battlebol/disco.png" alt="e" />
                      <div className="nfts_top_details_bottom">
                        <h1 className="nft_rararity">Rare</h1>
                        <h1 className="nft_level">Level9</h1> </div>
                    </div>
                  </div>
                  <div className="nfts_bottom">
                    <div className="nfts_choose_button">Choose Ball</div>
                  </div>
                </div>
                <div className="nfts">
                  <div className="nfts_top">
                    <h1 className="nft_name">Disco Ball ⭐⭐</h1>
                    <div className="nfts_top_details"> <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/battlebol/disco.png" alt="e" />
                      <div className="nfts_top_details_bottom">
                        <h1 className="nft_rararity">Rare</h1>
                        <h1 className="nft_level">Level9</h1> </div>
                    </div>
                  </div>
                  <div className="nfts_bottom">
                    <div className="nfts_choose_button">Choose Ball</div>
                  </div>
                </div>
                <div className="nfts">
                  <div className="nfts_top">
                    <h1 className="nft_name">Silver Ball ⭐⭐⭐</h1>
                    <div className="nfts_top_details"> <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/battlebol/silver.png" alt="e" />
                      <div className="nfts_top_details_bottom">
                        <h1 className="nft_rararity">Rare</h1>
                        <h1 className="nft_level">Level9</h1> </div>
                    </div>
                  </div>
                  <div className="nfts_bottom">
                    <div className="nfts_choose_button">Choose Ball</div>
                  </div>
                </div>
                <div className="nfts">
                  <div className="nfts_top">
                    <h1 className="nft_name">Disco Ball ⭐⭐</h1>
                    <div className="nfts_top_details"> <img src="https://cdn.jsdelivr.net/gh/Man-from-earth25/hello/website/public/battlebol/disco.png" alt="e" />
                      <div className="nfts_top_details_bottom">
                        <h1 className="nft_rararity">Rare</h1>
                        <h1 className="nft_level">Level9</h1> </div>
                    </div>
                  </div>
                  <div className="nfts_bottom">
                    <div className="nfts_choose_button">Choose Ball</div>
                  </div>
                </div>
              </div>
              <ion-icon name="ellipsis-horizontal-outline" />
            </div>
            <div className="continue_container player_name_submit">
              <h2>continue</h2> </div>
          </div>
        </div>
        {/* Hero End */}
      </main>
      {/* ////////////////////// Main End ⭐⭐⭐ ////////////////////// */}
      
      
    </>
  )
}
