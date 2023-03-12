import * as React from "react"
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'

import Container from "../container"

const VideoPlayer = () => {
  return (
    <Container>
      <div className={styles.section}>
        {/* <div className={styles.background}></div> */}
        <video
            width="640"
            height="360"
            controls>
          <source src="https://rr2---sn-9gv7lnes.c.drive.google.com/videoplayback?expire=1678660458&ei=KhsOZN2xIbSOlAfLgKrYCw&ip=2806:108e:1a:99c9:542e:927f:2060:2cd8&cp=QVRMWkdfT1RTSVhPOnUyaVJkVFRYYUtCaHVnRy02U08tMmNYYTBNWXFGQ08ySTVqekNxMUo1RU8&id=841186b40d52ad7b&itag=18&source=webdrive&requiressl=yes&mh=uB&mm=32&mn=sn-9gv7lnes&ms=su&mv=m&mvi=2&pl=51&ttl=transient&susc=dr&driveid=1_B-oHTyePkWhX6HLi9WEXDxEAGzRUGs8&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=73.909&lmt=1677530156902356&mt=1678645971&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgLaAFxZR7KuEwHzuwF76SHGYHqk67AxmKvTZVMvUiNCQCIQC84jCwWiAg2gr7F92_1gfc7sIngdQLDU9fy3VnAf6VfA==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgPG-SkZPhreo5jL0rdSFutQxk5uwjWGBN_XD0jp1uMv8CIGo7kWwfK1S1upU8P9OzIYknj1pQYfhsmCGn8ugB5b3y&cpn=eNK33n5QLzJ8Rdvi&c=WEB_EMBEDDED_PLAYER&cver=1.20230305.00.00" type="video/mp4" />
          Tu navegador no soporta el elemento video.
        </video>
      </div>
    </Container>
  );
}

export default VideoPlayer;
