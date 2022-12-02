<template>
    <section class="min-h-[700px] bg-primary h-screen">
        <div v-if="!this.ready" class="fixed top-0 bottom-0 w-full bg-[#6c5b07] h-screen z-[9]">
          <div class="flex flex-col justify-center items-center h-screen">
            <div class="py-4" >
               <svg width="150" height="150" viewBox="0 0 1176 706" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M364.9 418.4V207.6C364.9 122.6 434.4 49.6 519.5 48.6C606.8 47.5 677.9 118 677.9 205.1V418.4H623.2C601.4 418.4 583.7 400.7 583.7 378.9V195.9C583.7 161.9 557.1 133.2 523.1 132.3C488 131.4 459.2 159.6 459.2 194.5V418.4H364.9Z" fill="#002E62"/>
<path d="M325.3 48.6V259.4C325.3 344.4 255.8 417.4 170.7 418.4C83.4 419.4 12.3 349 12.3 261.9V48.6H67C88.8 48.6 106.5 66.3 106.5 88.1V271.1C106.5 305.1 133.1 333.8 167.1 334.7C202.2 335.6 231 307.4 231 272.5V48.6H325.3Z" fill="#002E62"/>
<path d="M157.9 515.7C155.9 512 153.5 508.9 150.8 506.4C148.1 503.9 145.4 501.9 142.7 500.3C136.3 496.6 129 494.7 120.7 494.4C112.3 494.7 104.9 496.6 98.5 500.3C95.8 501.9 93.1 503.9 90.5 506.4C89.8 507 89.2 507.7 88.5 508.5C87.8 507.8 87.2 507.1 86.5 506.4C83.8 503.9 81.1 501.9 78.4 500.3C72 496.6 64.7 494.7 56.4 494.4C48 494.7 40.6 496.6 34.2 500.3C31.5 501.9 28.8 503.9 26.2 506.4C23.6 508.9 21.2 512 19.1 515.7C17 519.4 15.3 523.8 14.1 528.9C12.9 534 12.2 539.9 12.2 546.7V596.3H36.0999V546.7C36.0999 543.8 36.2999 540.9 36.5999 537.9C36.8999 534.9 37.6999 532.2 39.0999 529.7C40.3999 527.2 42.3999 525.2 45.0999 523.5C47.7999 521.9 51.5 521.1 56.4 521.1C61.2 521.1 64.9999 521.9 67.6999 523.5C70.3999 525.1 72.3999 527.2 73.6999 529.7C74.9999 532.2 75.7999 534.9 76.0999 537.9C76.3999 540.9 76.6 543.8 76.6 546.7V596.3H100.5V546.7C100.5 543.8 100.7 540.9 101 537.9C101.3 534.9 102.1 532.2 103.5 529.7C104.8 527.2 106.8 525.2 109.5 523.5C112.2 521.9 115.9 521.1 120.8 521.1C125.7 521.1 129.4 521.9 132.1 523.5C134.8 525.1 136.8 527.2 138.1 529.7C139.4 532.2 140.2 534.9 140.5 537.9C140.8 540.9 141 543.8 141 546.7V584.8C141 591.2 146.2 596.3 152.5 596.3H164.9V546.7C164.9 539.9 164.2 534 162.9 528.9C161.5 523.9 159.9 519.5 157.9 515.7Z" fill="#002E62"/>
<path d="M264.9 515.7C262.7 512 260.3 508.9 257.4 506.4C254.6 503.9 251.7 501.9 248.9 500.3C242.1 496.6 234.4 494.7 225.8 494.4C217 494.7 209.3 496.6 202.5 500.3C199.6 501.9 196.8 503.9 194 506.4C191.2 508.9 188.7 512 186.6 515.7C184.4 519.4 182.7 523.8 181.4 528.9C180.1 534 179.4 539.9 179.4 546.7C179.4 553.5 180.1 559.4 181.4 564.5C182.7 569.6 184.4 574 186.6 577.6C188.8 581.3 191.2 584.3 194 586.7C196.8 589.1 199.7 591.1 202.5 592.7C209.3 596.2 217.1 598.1 225.8 598.2C234.4 598.1 242.1 596.2 248.9 592.7C251.8 591.1 254.6 589.1 257.4 586.7C260.2 584.3 262.7 581.2 264.9 577.6C267.1 573.9 268.8 569.6 270.2 564.5C271.6 559.4 272.3 553.5 272.3 546.7C272.3 539.9 271.6 534 270.2 528.9C268.8 523.9 267.1 519.5 264.9 515.7ZM247.4 556.2C246.9 559.6 245.8 562.8 244.3 565.7C242.7 568.6 240.5 571.1 237.5 573.1C234.6 575.1 230.7 576 225.8 576C220.9 576 217.1 575 214.1 573.1C211.2 571.1 208.9 568.7 207.3 565.7C205.7 562.8 204.7 559.6 204.2 556.2C203.7 552.8 203.4 549.7 203.4 546.8C203.4 543.9 203.7 540.8 204.2 537.4C204.7 534 205.8 530.8 207.3 527.9C208.9 525 211.1 522.5 214.1 520.5C217 518.5 220.9 517.6 225.8 517.6C230.7 517.6 234.5 518.6 237.5 520.5C240.4 522.5 242.7 524.9 244.3 527.9C245.9 530.8 246.9 534 247.4 537.4C247.9 540.8 248.2 543.9 248.2 546.8C248.1 549.7 247.9 552.8 247.4 556.2Z" fill="#002E62"/>
<path d="M373.3 515.7C371.3 512 369 508.9 366.4 506.4C363.9 503.9 361.2 501.9 358.5 500.3C352.2 496.6 345 494.7 336.9 494.4C332.9 494.8 328.9 495.8 325.1 497.3C321.8 498.7 318.5 500.9 315.1 503.9C313.6 505.2 312.2 506.7 311 508.5V475.5C311 469.1 305.8 464 299.5 464H287.7V546.5C287.7 553.3 288.3 559.2 289.7 564.3C291 569.4 292.7 573.8 294.9 577.5C297.1 581.2 299.5 584.3 302.3 586.7C305 589.1 307.9 591.1 310.7 592.7C317.4 596.2 325 598.1 333.6 598.2C342.2 598.1 349.9 596.2 356.7 592.7C359.6 591.1 362.4 589.1 365.2 586.7C368 584.3 370.5 581.2 372.6 577.6C374.8 573.9 376.5 569.6 377.9 564.5C379.3 559.4 380 553.5 380 546.7C380 539.9 379.4 534 378.1 528.9C377 523.9 375.3 519.5 373.3 515.7ZM355.2 556.2C354.7 559.6 353.6 562.8 352.1 565.7C350.5 568.6 348.3 571.1 345.3 573.1C342.4 575.1 338.5 576 333.6 576C328.8 576 324.9 575 321.9 573.1C319 571.1 316.7 568.7 315 565.7C313.4 562.8 312.3 559.6 311.8 556.2C311.3 552.8 311 549.7 311 546.8C311 543.9 311.3 540.8 311.8 537.4C312.3 534 313.4 530.8 315 527.9C316.6 525 318.9 522.5 321.9 520.5C324.8 518.5 328.7 517.6 333.6 517.6C338.4 517.6 342.3 518.6 345.3 520.5C348.2 522.5 350.5 524.9 352.1 527.9C353.7 530.8 354.7 534 355.2 537.4C355.7 540.8 356 543.9 356 546.8C356 549.7 355.7 552.8 355.2 556.2Z" fill="#002E62"/>
<path d="M408.1 497H395.7V596.4H419.6V508.5C419.7 502.2 414.5 497 408.1 497Z" fill="#002E62"/>
<path d="M418.4 465.2C417.7 464.5 416.5 464.2 414.9 464.1C413.3 464 410.9 464 407.7 464C404.6 464 402.2 464 400.5 464.1C398.9 464.2 397.7 464.5 397 465.2C396.3 465.9 395.9 466.9 395.8 468.3C395.7 469.7 395.7 471.9 395.7 474.8C395.7 477.7 395.7 479.8 395.8 481.3C395.9 482.7 396.3 483.8 397 484.4C397.7 485.1 398.9 485.4 400.5 485.5C402.1 485.6 404.5 485.6 407.7 485.6C410.8 485.6 413.2 485.6 414.9 485.5C416.5 485.4 417.7 485.1 418.4 484.4C419.1 483.7 419.5 482.7 419.6 481.3C419.7 479.9 419.7 477.7 419.7 474.8C419.7 471.9 419.7 469.8 419.6 468.3C419.5 466.9 419.1 465.9 418.4 465.2Z" fill="#002E62"/>
<path d="M448.7 464.1H436.3V596.4H460.2V475.6C460.3 469.2 455.1 464.1 448.7 464.1Z" fill="#002E62"/>
<path d="M489.3 497H476.9V596.4H500.8V508.5C500.8 502.2 495.7 497 489.3 497Z" fill="#002E62"/>
<path d="M499.6 465.2C498.9 464.5 497.7 464.2 496.1 464.1C494.5 464 492.1 464 488.9 464C485.8 464 483.4 464 481.7 464.1C480.1 464.2 478.9 464.5 478.2 465.2C477.5 465.9 477.1 466.9 477 468.3C476.9 469.7 476.9 471.9 476.9 474.8C476.9 477.7 476.9 479.8 477 481.3C477.1 482.7 477.5 483.8 478.2 484.4C478.9 485.1 480.1 485.4 481.7 485.5C483.3 485.6 485.7 485.6 488.9 485.6C492 485.6 494.4 485.6 496.1 485.5C497.7 485.4 498.9 485.1 499.6 484.4C500.3 483.7 500.7 482.7 500.8 481.3C500.9 479.9 500.9 477.7 500.9 474.8C500.9 471.9 500.9 469.8 500.8 468.3C500.7 466.9 500.3 465.9 499.6 465.2Z" fill="#002E62"/>
<path d="M547.2 571.3C545.6 570.4 544.3 569.4 543.4 568.4C542.4 567.1 541.6 565.7 541.2 564.1V520.4H552.2C558.6 520.4 563.7 515.2 563.7 508.9V497H541.2V475.6C541.2 469.2 536 464.1 529.7 464.1H517.3V567.4C517.3 574.2 518.7 579.5 521.5 583.4C524.3 587.3 527.4 590.2 530.8 592.1C534.8 594.5 539.4 595.9 544.5 596.4H568.4V572.7H553.5C551 572.7 548.8 572.2 547.2 571.3Z" fill="#002E62"/>
<path d="M652.2 497L629.1 573.9L605.9 497H581.8L613.8 596.2C614.5 598.2 614.6 599.9 614.2 601.3C613.8 602.6 612.9 603.8 611.5 604.8C610.1 605.8 607.5 606.4 603.7 606.4H583.7V629.3H614.7C618.6 628.8 622.3 627.8 625.7 626.4C628.7 625.1 631.6 623.2 634.5 620.6C637.4 618 639.5 614.5 641 609.9L676.3 497H652.2Z" fill="#002E62"/>
<path d="M48.7001 656.5C47.2001 654.7 45.6001 653.2 43.9001 652.3C42.2001 651.3 40.5 650.6 39 650.1C37.5 649.6 36.1 649.4 35 649.3C33.9 649.2 33.2001 649.2 33 649.2C32.8 649.2 32.1 649.2 31 649.3C29.9 649.4 28.6 649.6 27 650.1C25.4 650.6 23.8 651.3 22.1 652.3C20.4 653.3 18.8 654.7 17.3 656.5C15.8 658.3 14.6 660.7 13.7 663.5C12.7 666.3 12.3 669.8 12.3 673.9V697.2H23.6V673.9C23.6 672.5 23.7 671.2 24 669.7C24.2 668.3 24.7 667 25.4 665.8C26.1 664.6 27 663.7 28.3 662.9C29.5 662.1 31.2001 661.8 33.2001 661.8C35.2001 661.8 36.9 662.2 38.1 662.9C39.3 663.7 40.3 664.6 41 665.8C41.7001 667 42.1001 668.3 42.4001 669.7C42.6001 671.1 42.8 672.5 42.8 673.9V697.2H54.1V673.9C54.1 669.8 53.6001 666.3 52.7001 663.5C51.4001 660.6 50.2001 658.3 48.7001 656.5Z" fill="#002E62"/>
<path d="M102.8 667.8C102.4 665.4 101.8 663.3 101 661.5C100.2 659.7 99.2001 658.1 98.1001 656.8C97.0001 655.5 95.9001 654.4 94.6001 653.5C93.3001 652.6 92.1001 651.9 90.9001 651.3C87.9001 650 84.8001 649.3 81.4001 649.2C77.3001 649.3 73.6001 650.2 70.4001 652C69.0001 652.7 67.7001 653.7 66.4001 654.9C65.1001 656.1 63.9001 657.5 62.9001 659.3C61.9001 661.1 61.1001 663.1 60.5001 665.5C59.9001 667.9 59.6001 670.7 59.6001 673.9C59.6001 677.1 59.9001 679.9 60.5001 682.3C61.1001 684.7 61.9001 686.8 62.9001 688.5C63.9001 690.2 65.1001 691.6 66.4001 692.8C67.7001 693.9 69.1001 694.9 70.4001 695.6C73.6001 697.3 77.3001 698.1 81.4001 698.2C84.5001 698.2 87.5001 697.6 90.3001 696.5C91.5001 696 92.7001 695.4 93.9001 694.6C95.1001 693.8 96.3001 692.9 97.4001 691.7C98.5001 690.5 99.5001 689.1 100.4 687.5C101.3 685.9 102 684 102.5 681.9H90.5001C89.8001 683.5 88.8001 684.9 87.4001 686.1C86.0001 687.3 84.0001 687.9 81.5001 687.9C79.0001 687.9 77.0001 687.3 75.6001 686.1C74.2001 684.9 73.1001 683.5 72.5001 681.9C72.1001 680.9 71.8001 679.8 71.6001 678.7C71.4001 677.6 71.3001 676.6 71.1001 675.5H103.4V673.8C103.4 672.7 103.4 671.6 103.3 670.7C103 669.7 102.9 668.7 102.8 667.8ZM71.6001 667.8C71.8001 666.8 72.2001 665.8 72.7001 664.8C73.2001 663.8 73.8001 662.9 74.6001 662.1C75.4001 661.3 76.4001 660.7 77.5001 660.2C78.6001 659.7 79.9001 659.5 81.4001 659.5C82.9001 659.5 84.2001 659.7 85.3001 660.2C86.4001 660.7 87.4001 661.3 88.2001 662.1C89.0001 662.9 89.6001 663.8 90.1001 664.8C90.6001 665.8 90.9001 666.8 91.3001 667.8H71.6001Z" fill="#002E62"/>
<path d="M123.3 685.3C122.5 684.9 121.9 684.4 121.5 683.9C121 683.3 120.7 682.6 120.5 681.9V661.3H131.1V650.3H120.5V637.8H109.2V683.5C109.2 686.7 109.9 689.2 111.2 691C112.5 692.8 114 694.2 115.6 695.1C117.5 696.2 119.7 696.9 122.1 697.1H133.4V686H126.4C125.1 686 124.1 685.8 123.3 685.3Z" fill="#002E62"/>
<path d="M182.9 685.3L175.3 650.4H174.6H164.7H164L156.4 685.3L148.8 650.4H137.5L148.8 697.2H156.4H164L169.6 672.1L175.3 697.2H182.9H190.4L201.8 650.4H190.4L182.9 685.3Z" fill="#002E62"/>
<path d="M246.5 659.2C245.5 657.4 244.3 656 243 654.8C241.7 653.6 240.3 652.7 239 651.9C235.8 650.2 232.2 649.3 228.1 649.1C224 649.2 220.3 650.1 217.1 651.9C215.7 652.6 214.4 653.6 213.1 654.8C211.8 656 210.6 657.4 209.6 659.2C208.6 661 207.8 663 207.2 665.4C206.6 667.8 206.3 670.6 206.3 673.8C206.3 677 206.6 679.8 207.2 682.2C207.8 684.6 208.6 686.7 209.6 688.4C210.6 690.1 211.8 691.5 213.1 692.7C214.4 693.8 215.8 694.8 217.1 695.5C220.3 697.2 224 698 228.1 698.1C232.2 698 235.8 697.2 239 695.5C240.4 694.8 241.7 693.8 243 692.7C244.3 691.6 245.5 690.1 246.5 688.4C247.5 686.7 248.3 684.6 249 682.2C249.6 679.8 250 677 250 673.8C250 670.6 249.7 667.8 249 665.4C248.3 663 247.5 660.9 246.5 659.2ZM238.2 678.2C238 679.8 237.5 681.3 236.7 682.7C235.9 684.1 234.9 685.2 233.5 686.2C232.1 687.1 230.3 687.6 228 687.6C225.7 687.6 223.9 687.1 222.5 686.2C221.1 685.3 220.1 684.1 219.3 682.7C218.5 681.3 218.1 679.8 217.8 678.2C217.6 676.6 217.4 675.1 217.4 673.8C217.4 672.4 217.5 671 217.8 669.4C218 667.8 218.5 666.3 219.3 664.9C220 663.5 221.1 662.4 222.5 661.4C223.9 660.5 225.7 660 228 660C230.3 660 232.1 660.5 233.5 661.4C234.9 662.3 235.9 663.5 236.7 664.9C237.4 666.3 237.9 667.8 238.2 669.4C238.4 671 238.6 672.5 238.6 673.8C238.6 675.2 238.5 676.6 238.2 678.2Z" fill="#002E62"/>
<path d="M261.9 652.4C260.3 653.3 258.8 654.7 257.5 656.5C256.1 658.3 255.5 660.8 255.5 664V697.1H266.9V665.5C267.1 664.8 267.4 664.1 267.9 663.5C268.3 663 268.9 662.5 269.7 662.1C270.5 661.7 271.5 661.5 272.7 661.5H281.4V650.3H268.5C266 650.6 263.8 651.3 261.9 652.4Z" fill="#002E62"/>
<path d="M310.1 669.8L324.3 650.4H311.9L298.1 669V634.9H286.8V697.2H298.1V685.6L303.7 678.3L317.5 697.2H329.9L310.1 669.8Z" fill="#002E62"/>
<path d="M937.3 593.2C937.3 593.2 712.2 375.5 712.2 233.5C712.2 109.2 813 8.40002 937.3 8.40002H937.8C1062.1 8.40002 1162.9 109.2 1162.9 233.5C1162.9 375.5 937.8 593.2 937.8 593.2H937.3Z" fill="#FDC42B"/>
<path d="M937.8 48.6C835.7 48.6 752.9 131.4 752.9 233.5C752.9 335.6 835.7 418.4 937.8 418.4C1039.9 418.4 1122.7 335.6 1122.7 233.5C1122.8 131.4 1040 48.6 937.8 48.6ZM937.8 334.8C881.9 334.8 836.5 289.5 836.5 233.5C836.5 177.6 881.8 132.2 937.8 132.2C993.7 132.2 1039.1 177.5 1039.1 233.5C1039.1 289.4 993.8 334.8 937.8 334.8Z" fill="#002E62"/>
</svg>
            </div>
            <img class="min-w-[120px]" src="/img/tail-spin.svg" alt="spin" />
          </div>
        </div>
        <div v-else class="pb-5 px-[20px] md:px-[80px] h-full container flex justify-center xl:justify-start items-center relative mx-auto">
          <img class="z-[1] absolute xl:block hidden bottom-0 right-[5%]" src="/img/hand.png" alt="prenotazioni" />
          <div class="z-[2] flex flex-col max-w-[500px] md:max-w-[unset] md:min-w-[546px]">
            <h4 class="mt-[18px] text-secondary font-bold text-[25px] md:text-[40px]">PARKINGARAGE I</h4>
           <div class="flex gap-[10px] md:gap-[20px] items-center">
              <svg class="hidden md:block" width="26" height="36" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="26" height="36" transform="translate(1 1)" fill=""/>
                <path d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg class=" md:hidden" width="14" height="26" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="26" height="36" transform="translate(1 1)" fill=""/>
                <path d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="#143793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h4 class="text-secondary font-medium text-[16px] md:text-[24px] xl:text-[36px]">{{this.sede_info.nome}}</h4>
            </div>
            <h2 class="text-secondary font-medium text-[12px] md:text-[20px] pb-[13px]">{{this.sede_info.ind}}</h2>
            <h2 class="text-secondary font-medium text-[12px] md:text-[20px] pb-[13px]">{{this.sede_info.cap}} - {{this.sede_info.cit}}</h2>
            

            <h2 class="text-secondary font-bold text-[20px]">Prenota ora</h2>
            
            <div class="mt-[8px] flex md:flex-row flex-col gap-[8px]">
              <div class="px-[9px] py-[8px] flex-1 bg-[#ffff] flex flex-col">
                <h4 class="text-center text-secondary font-medium text-[20px]">INGRESSO</h4>
                <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/icon_data.png" alt="data-ingresso" />
                    <client-only><date-picker :language="it" :highlighted="this.state.highlighted" :disabled-dates="this.state.disabledDates" :id="'data_start'" :input-class="'mypicker'" placeholder="Data ingresso" format="dd/MM/yyyy" /></client-only>
                    
                </div>
               
                 <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/clock_icon.png" alt="orario-ingresso" />
                    <select class="z-10 bg-transparent border-0 pl-[50px] absolute top-0 bottom-0 left-0 w-full" id="ora_start">
                      <option selected value="">Orario ingresso</option>
                      <option v-for="item in this.orari_ingresso" :key="item">{{item}}</option>
                    </select>
                </div>
              </div>
               <div class="px-[9px] py-[8px] flex-1 bg-[#ffff] flex flex-col">
                <h4 class="text-center text-secondary font-medium text-[20px]">USCITA</h4>
                <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/icon_data.png" alt="data-uscita" />
                   <client-only><date-picker :language="it" :highlighted="this.state.highlighted" :disabled-dates="this.state.disabledDates" :id="'data_end'" :input-class="'mypicker'" placeholder="Data uscita" format="dd/MM/yyyy"/></client-only>
                </div>
                 <div class="relative p-[20px] mt-[10px] border-solid border-[1.5px] border-[#B4B4B4]">
                    <img class="top-0 translate-y-[45%] z-[1] absolute left-[11px] " src="/img/clock_icon.png" alt="orario-uscita" />
                   
                    <select class="z-10 bg-transparent border-0 pl-[50px] absolute top-0 bottom-0 left-0 w-full" id="ora_end">
                      <option selected value="">Orario uscita</option>
                       <option v-for="item in this.orari_uscita" :key="item">{{item}}</option>
                    </select>
                    
                </div>
                 
              </div>
            </div>
             <h3 id="error-generic" class="hidden text-center text-red-800 font-medium pt-[7px]" >Compila correttamente Ingresso e uscita</h3>
             <h3 id="error-generic-ore" class="hidden text-center text-red-800 font-medium pt-[7px]" >Data/ora ingresso incongruente a Data/ora uscita</h3>
            <div class="px-[20px] mt-[8px] py-[18px] flex gap-[26px] bg-[#ffff]">

              <label class="items-center justify-center cursor-pointer flex flex-1 gap-[20px]" @click="() => ActiveVeicolo(veicolo.id)" v-for="veicolo in this.veicoli" :key="veicolo.id" :id="veicolo.id">
                <div class="flex flex-col">
                  <div class="flex gap-[10px] items-center">
                    <input class="w-[10px] h-[10px] md:w-[16px] md:h-[16px] " :value="veicolo.id" type="radio" name="veicolo" />
                    <div class="veicoli" v-html="veicolo.svgIcon"></div>
                  </div>
                  <p class="text-secondary text-center">{{veicolo.nome}}</p>
                </div>
              </label>
              
              
            </div>
             <h3 id="error-veicolo" class="hidden text-center text-red-800 font-medium pt-[7px]" >Seleziona un veicolo</h3>

            <button @click="() => SearchPren()" class="mt-[14px] rounded-[11px] py-[14px] text-[#ffff] bg-secondary"><h3 class="font-semibold text-[24px]">CERCA</h3></button>
          </div>
        </div>
        
    </section>
</template>


<script>
import {en, es, it} from 'vuejs-datepicker/dist/locale'
export default{
  props: [ 'veicoli'],
  data(){
    return{
      ready: false,
      it: it,
      data_start: "",
      data_end: "",
      ora_start: "",
      ora_end: "''",
      sede: "",
      veicolo: "",
      FasciaOraria: {},
      orari_ingresso: ['00:00', '00:30', '01:00', '01:30', '02:00','02:30', '03:00','03:30', '04:00','04:30', '05:00','05:30', '06:00','06:30', '07:00','07:30', '08:00','08:30', '09:00','09:30', '10:00', '10:30', '11:00','11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'],
      orari_uscita: [],
      sede_info: {},
      state: {
       
      highlighted: {
       
          dates: [
            new Date(),
          ],
        }
      }
    }
  },
  methods: {
      SearchPren(){
      this.data_start = document.getElementById('data_start');
      this.data_end = document.getElementById('data_end');
      console.log(data_end.value);
      this.ora_start = document.getElementById('ora_start');
      this.ora_end = document.getElementById('ora_end');
      console.log(ora_end.value);
      this.sede = 1;
      this.veicolo = document.querySelector('input[name="veicolo"]:checked');
      
      if(this.data_start.value == undefined || this.data_start.value.trim() == ""){
         document.getElementById('error-generic').classList.remove('hidden');
      }
      else if(this.data_end.value == undefined || this.data_end.value.trim() == ""){
         document.getElementById('error-generic').classList.remove('hidden');
      }
       else if(this.ora_end.value == undefined || this.ora_end.value.trim() == ""){
         document.getElementById('error-generic').classList.remove('hidden');
      }
       else if(this.ora_start.value == undefined || this.ora_start.value.trim() == ""){
         document.getElementById('error-generic').classList.remove('hidden');
      }
      else if(this.veicolo?.value){
        //OK
        let splitting = this.data_start.value.split('/');
        let data_convert_start =  splitting[1] + '/' + splitting[0] + '/' + splitting[2];
        splitting = this.data_end.value.split('/');
        let data_convert_end = splitting[1] + '/' + splitting[0] + '/' + splitting[2];

        


         let dataInizio = new Date(data_convert_start + " " + this.ora_start.value);
         let dataFine = new Date(data_convert_end + " " + this.ora_end.value);
         
         let daysBtwdate= Math.abs(dataFine.getTime() - dataInizio.getTime());
        daysBtwdate = daysBtwdate / (24 * 60 * 60 * 1000);
         console.log(daysBtwdate + ' GIORNI');
         let todayDate = new Date();
          
        if(todayDate > dataInizio){console.log('La data di oggi è maggiore della data inizio')}
        if(todayDate > dataFine){console.log('La data di oggi è maggiore della data di fine'); console.log('TODAY->'+todayDate); console.log('FINE->'+dataFine)}

        if(dataInizio >= dataFine || todayDate > dataInizio || todayDate > dataFine){
          document.getElementById('error-generic-ore').classList.remove('hidden');
          document.getElementById('error-veicolo').classList.add('hidden');
          document.getElementById('error-generic').classList.add('hidden');
        }
        else{
         //CALCOLOO TEMPORANEO 30 GIORNI
          let daysBtwdate= Math.abs(dataFine.getTime() - dataInizio.getTime());
          daysBtwdate = daysBtwdate / (24 * 60 * 60 * 1000);
          if(daysBtwdate >= 30){alert('La fuoriuscita dal listino di 30 giorni non è ancora prevista, inserire un ingresso & uscita con un periodo minore di un mese.')}
          else{
         this.$router.push('/prenotazione?data_start='+data_convert_start+'&ora_start='+this.ora_start.value+'&data_end='+data_convert_end+'&ora_end='+this.ora_end.value+'&veicolo='+this.veicolo.value+'&sede='+this.sede);
          }
        }
      }
      else{
        document.getElementById('error-generic').classList.add('hidden');
        document.getElementById('error-veicolo').classList.remove('hidden');
       
      }
      
    },
    ActiveVeicolo(id){
      let veicolo = document.getElementById(id);
      let veicoli = document.querySelectorAll(".veicoli-attivi");
      for (var i = 0; i < veicoli.length; i++) {
          
          veicoli[i].classList.remove('veicoli-attivi');

      }
      veicolo.classList.add('veicoli-attivi');
      
    },



  },

  async mounted(){
   
let dx_day = new Date().getUTCDate();
   let dx = new Date();

   this.state.disabledDates =  {to: new Date(dx.getFullYear(),dx.getMonth(),dx_day),
        /*days: [6, 0],*/}
    //Prendo orario e chiusura
   const RangeLavoro = await this.$axios.$get('/sede/1');
   this.FasciaOraria = RangeLavoro.data;
   this.sede_info = RangeLavoro.data;
   
   //Rimuovo 00:08:00 -> :00 dalle stringhe, risultato -> 08:00
   let apertura = this.FasciaOraria.apertura.slice(0, 5);
   let chiusura =  this.FasciaOraria.chiusura.slice(0, 5);
   //Prendo l'indice di 08:00 nel mio array di orari ingresso e uscita
   //Successivamente faccio lo splice dell'array così da prendere da Posizione(08:00 in poi e )
   let index = this.orari_ingresso.indexOf(apertura);
   this.orari_ingresso = this.orari_ingresso.splice(index)


    //Combino gli orari di apertura alla chiusura per avere un range da un inizio
    this.orari_uscita = [...this.orari_ingresso];
    //Prendo gli indici dell'apertura e chiusura in uscita
    let u_a = this.orari_uscita.indexOf(apertura);
    let u_c = this.orari_uscita.indexOf(chiusura);
    //Prendo solo da apertura-uscita fino a chiusura-uscita tipo dalle 08:00 alle 22:00 -> 
    //08:00 - 21:30 (se c'è necessità fino alle 22:00 mettere uc+1)
    this.orari_uscita = this.orari_uscita.splice(u_a, u_c);
    //Tolgo dall'ingresso l'ora e mezza prima l'uscita
    let index_apertura = this.orari_ingresso.indexOf(apertura);
    let index_chiusura = this.orari_ingresso.indexOf(chiusura);
    this.orari_ingresso = this.orari_ingresso.splice(index_apertura, index_chiusura);
    
    setTimeout(() => this.ready = true, 3000);
     
  }

}
</script>

<style>
 .datepicker-view{
  flex-direction: column !important;
}
.datepicker-header {
  height: auto !important;
  background: transparent !important;
}

.veicoli path {
  fill: #B4B4B4;
}

.veicoli-attivi path{
  fill: #2F168B !important;
}
.datepicker-footer{
  z-index: -1;
}


@media only screen and (max-width: 600px) {
  .veicoli svg{
  width: 35px !important;
}
}

.vdp-datepicker{
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
}
.mypicker{
  border: 0 !important;
  padding-left: 50px !important;
  width: 100% !important;
}

.datepicker-view{
  flex-direction: column !important;
}
.datepicker-header {
  height: auto !important;
  background: transparent !important;
}
.datepicker-footer{
  z-index: -1;
}

select option:disabled {
    color: #CCC;
}

</style>