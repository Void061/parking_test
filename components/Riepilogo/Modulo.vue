<template>
    <section class="px-[20px] py-[100px] md:py-[136px] mx-auto md:px-[81px] container">
         <div id="popup-modal" tabindex="-1" class="hidden bg-[#000000a4] overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-md h-full m-auto top-[35%] md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button @click="closeModal" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Chiudi</span>
            </button>
            <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Se non compilo Marca e Modello mi impegno a comunicarlo prima di presentarmi in garage pena: l'invalidità della prenotazione.</h3>
                <button @click="consentiModal" type="button" class="text-secondary bg-primary hover:bg-[#ca9d14] focus:ring-4 focus:outline-none focus:ring-[#d6af3b] dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Confermo
                </button>
                <button @click="closeModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Chiudi</button>
            </div>
        </div>
    </div>
</div>
        <h2 class="font-bold text-[36px] text-secondary">Garage Olimpico Ottaviano</h2>
         
        <div class="mt-[54px] border-t-[1px] border-solid border-[#B4B4B4] py-[67px] flex flex-col gap-[20px]">
            <div class="flex-col md:flex-row flex gap-[20px] md:gap-[44px]">
                <input @click="ErrorFixing($event)" id="nome" class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="NOME" />
                <input  @click="ErrorFixing($event)" id="cognome" class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="COGNOME" />
            </div>
            <div class="flex flex-col md:flex-row gap-[20px] md:gap-[44px]">
                <input  @click="ErrorFixing($event)" id="telefono" class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="TELEFONO" />
                <input  @click="ErrorFixing($event)" id="mail" class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="MAIL" />
            </div>
            <div class="flex md:flex-row flex-col gap-[20px] md:gap-[44px]">
                <input  @click="ErrorFixing($event)" id="modello" class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="MARCA E MODELLO DEL VEICOLO" />
                <input  @click="ErrorFixing($event)" id="targa" class="flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]" type="text" placeholder="TARGA" />
            </div>
            <div class="flex gap-[44px]">
                <textarea id="msg" placeholder="MESSAGGIO" class="h-[131px] flex-1 text-[20px] py-[8px] pl-[37px] border-[1.5px] border-solid border-[#B4B4B4]"></textarea>
            </div>
            <div class="flex gap-[35px] items-center">
                <label class="mt-[-18px] custom-checkbox">
                    <input  @click="ErrorFixing($event, 'checkmark-dati')" class="" id='consenti-dati' type="checkbox" />
                    <span id="checkmark-dati" class="checkmark"></span>
                </label>
                
                <h5 class="font-medium text-[18px] text-[#B4B4B4]">Acconsento al trattamento dei dati</h5>
            </div>
        </div>

        <h2 class="mt-[100px] md:mt-[137px] font-bold text-[36px] text-secondary">RIEPILOGO PRENOTAZIONE</h2>
         <div class="mt-[54px] border-t-[1px] border-solid border-[#B4B4B4] py-[67px] px-[20px] flex flex-col lg:flex-row md:justify-center lg:justify-between">
             <div class="flex flex-col justify-center items-center">
                 <div class="flex flex-col">
                    <h4 class="text-secondary font-medium text-[20px]">{{this.nome}}</h4>
                </div>
                  <div class="mt-[30px] veicolo-m veicolo-w" v-html="this.icon"></div>
                
             </div>
               <div class="lg:mt-0 mt-[50px] flex flex-col justify-center items-center">
                 <div class="flex flex-col">
                    <h4 class="text-secondary font-medium text-[20px]">DATA INGRESSO</h4>
                </div>
                 <div class="mt-[10px] lg:mt-[38px] flex items-center gap-[28px]">
                     <img class="ml-[-10px]" src="/img/icon_data.png" alt="data" />
                     <h5 class="text-[#B4B4B4] font-medium text-[18px]">{{this.data_i}}</h5>
                 </div>
                 <div class="mt-[20px] lg:w-full flex items-center gap-[28px]">
                    <img src="/img/clock_icon.png" alt="orologio" />
                     <h5 class="text-[#B4B4B4] font-medium text-[18px]">{{this.ora_i}}</h5>
                 </div>
             </div>
             <div class="lg:mt-0 mt-[50px] flex flex-col justify-center items-center">
                 <div class="flex flex-col">
                    <h4 class="text-secondary font-medium text-[20px]">DATA USCITA</h4>
                </div>
                 <div class="mt-[10px] lg:mt-[38px] flex items-center gap-[28px]">
                     <img src="/img/icon_data.png" alt="data" />
                     <h5 class="text-[#B4B4B4] font-medium text-[18px]">{{this.data_f}}</h5>
                 </div>
                 <div class="mt-[20px] lg:w-full flex items-center gap-[28px]">
                    <img src="/img/clock_icon.png" alt="orologio" />
                     <h5 class="text-[#B4B4B4] font-medium text-[18px]">{{this.ora_f}}</h5>
                 </div>
             </div>
               <div class="lg:mt-0 mt-[50px] flex flex-col items-center">
                 <div class="flex flex-col">
                    <h4 class="text-secondary font-medium text-[20px]">PAGA ONLINE</h4>
                </div>
                 <div class="mt-[38px]">
                      <div class=" flex items-center gap-[28px]">         
                     </div>
                     <button class="px-[28px] py-[8px] rounded-[11px] flex items-center h-[46px]text-secondary bg-primary">
                         <h3 class="text-secondary font-semibold text-[24px]">€ {{this.prezzo}}</h3>
                         
                         </button>
                 </div>
                
             </div>
          
             
        </div>

        <div class="pb-[55px] border-b-[1px] border-solid border-[#B4B4B4] mt-[100px] md:mt-[152px] flex flex-col">
            <h4 class="text-[#B4B4B4] font-medium text-[20px]">ORARIO DI APERTURA</h4>
            <h4 class="max-w-[953px] mt-[34px] text-[#B4B4B4] font-medium text-[20px]">
                Dal Lunedì al Sabato dalle 06:00 all'1:00. Domenica e festivi dalle 06:00 alle 10:00 e dalle 18:00 all'1:00.
                Dal 09 al 31 agosto il parcheggio sarà aperto dalle 06:00 alle 10:00 e dalle 18:00 alle 01:00.
            </h4>
            <div class="mt-[34px] flex gap-[30px]">
                 <label class="mt-[6px] custom-checkbox">
                    <input @click="ErrorFixing($event, 'checkmark-orario')" id='orario-ridotto' class="" type="checkbox" />
                    <span id='checkmark-orario' class="checkmark"></span>
                </label>
                <h5 class="text-[#B4B4B4] font-medium text-[18px]">Ho preso nota dell'orario ridotto del parcheggio</h5>
            </div>
        </div>
        <div class="pb-[55px] border-b-[1px] border-solid border-[#B4B4B4] mt-[50px] flex flex-col">
            <h4 class="text-[#B4B4B4] font-medium text-[20px]">ALTRE INFORMAZIONI</h4>
            <h4 class="max-w-[953px] mt-[34px] text-[#B4B4B4] font-medium text-[20px]">
                Le chiavi del veicolo devono essere consegnate agli addetti.
            </h4>
            <div class="mt-[34px] flex gap-[30px]">
                 <label class="mt-[6px] custom-checkbox">
                    <input @click="ErrorFixing($event, 'checkmark-chiavi')" id='chiavi-regola' class="" type="checkbox" />
                    <span id='checkmark-chiavi' class="checkmark"></span>
                </label>
                <h5 class="text-[#B4B4B4] font-medium text-[18px]">Ho preso nota del regolamento</h5>
            </div>
        </div>
        <div class="pb-[55px] mt-[50px] flex flex-col">
            <h4 class="text-[#B4B4B4] font-medium text-[20px]">ALTRE INFORMAZIONI</h4>
            <div class="mt-[34px] flex gap-[30px]">
                 <label class="mt-[6px] custom-checkbox">
                    <input @click="OpenDetails()" id="fattura" class="" type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <h5 class="text-[#B4B4B4] font-medium text-[18px]">Richiedi fattura</h5>
            </div>

            <div id="fattura-dati" class="hidden mt-[34px]">
                <div class="flex md:flex-row flex-col text-left items-start md:items-center md:gap-[75px] gap-[34px] ">
                    <h3 class="text-[#B4B4B4] font-medium text-[18px]">Nazione</h3>
                    <select id='nazione' @change="Locations($event)" class="w-[100%] md:w-auto px-4 h-[40px]">
                        <option selected>---</option>
                        <option value="Italy">Italia</option>         
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
                    </select>

                </div>

                <div id="other-country" class="hidden max-w-[560px] mt-[34px] flex flex-col gap-[34px]" >
                    
                    <input @click="ErrorFixing($event)" id="n-fattura" type="text" placeholder="Nome o Cognome o Nome Società" />
                    <input @click="ErrorFixing($event)" id="r-fattura" type="text" placeholder="Ragione sociale (nome e cognome o Nome società)" />
                    <input @click="ErrorFixing($event)" id="i-fattura" type="text" placeholder="Indirizzo" />
                    <input @click="ErrorFixing($event)" id="ct-fattura" type="text" placeholder="Città" />
                    <input @click="ErrorFixing($event)" id="p-fattura" type="text" placeholder="P.Iva" />
                </div>

                <div id="italia" class="hidden max-w-[560px] gap-[34px] mt-[34px] flex flex-col" >
                    <!---
                    <h3 class="text-[#B4B4B4] font-medium text-[18px]">Mostra dati fattura sul voucher</h3>
                    <select id="voucher" class="min-w-[200px] w-[100%] md:w-auto px-4 h-[40px]">
                        <option>Si</option>
                        <option>No</option>
                    </select>
                    -->
                    <h3 class="text-[#B4B4B4] font-medium text-[18px]">Modalità invio</h3>
                    <select id='mod-invio' @change="ModInvio($event)" class="min-w-[200px] w-[100%] md:w-auto px-4 h-[40px]">
                        <option default>Nessuna</option>
                        <option>PEC</option>
                        <option>Codice destinatario</option>
                        <option>Codice IPA (pubblica amministrazione)</option>
                    </select>
                    <input type="text" class="hidden" placeholder="" @click="ErrorFixing($event)" id="dato-invio"/>
                    <input @click="ErrorFixing($event)" id="ragione-it" type="text" placeholder="Ragione sociale (nome e cognome o Nome società)" />
                    <input @click="ErrorFixing($event)" type="text" id="provincia-it" placeholder="Provincia"/>
                    <input @click="ErrorFixing($event)" type="text" id="comune-it" placeholder="Comune" />
                    <input @click="ErrorFixing($event)" id="indirizzo-it" type="text" placeholder="Indirizzo" />
                    <input @click="ErrorFixing($event)" id="citta-it" type="text" placeholder="Città" />
                    <input @click="ErrorFixing($event)" id="cap-it" type="text" placeholder="CAP" />
                    <input @click="ErrorFixing($event)" id="p-it" type="text" placeholder="P.Iva" />
                </div>
                
            </div>
            <button @click="Checkout()" class="mt-[95px] mx-[10px] py-[20px] bg-primary rounded-[11px]"><h3 class="text-secondary text-[24px] font-semibold">CONFERMA</h3></button>
        </div>
    </section>
</template>


<script>
export default {
    props: ['nome', 'prezzo', 'icon', 'data_i' , 'data_f', 'ora_i', 'ora_f', 'v', 'vt'],
    data(){
        return{
            veicolo_info: '',
            fat: false,
            modello_consenti: 0,
        }
    },
    async mounted(){
           
    },
    methods:{
        consentiModal(){
            this.modello_consenti = 1;
            modello.value = 'Comunicherò prima di presentarmi';
            document.getElementById('popup-modal').classList.add('hidden');
            
        },
        closeModal(){
            document.getElementById('popup-modal').classList.add('hidden');
            document.getElementById('modello').style.border = '1.5px solid red';
            document.getElementById('modello').scrollIntoView();
        },
        ErrorFixing(e, checkmark){
            if(e.target.type == 'checkbox'){
                document.getElementById(checkmark).style.border = '1.5px solid #B4B4B4';
            }
            if(e.target.type == 'text'){
                 e.target.style.border = '1.5px solid #B4B4B4';
            }
           
        },
        ModInvio(e){
            e.target.style.border = '1.5px solid #B4B4B4';
            if(e.target.value != 'Nessuna'){document.getElementById('dato-invio').classList.remove('hidden');}
            if(e.target.value == 'PEC'){document.getElementById('dato-invio').placeholder='PEC';}
            if(e.target.value == 'Codice destinatario'){document.getElementById('dato-invio').placeholder='Codice destinatario';}
            if(e.target.value == 'Codice IPA (pubblica amministrazione)'){document.getElementById('dato-invio').placeholder='Codice IPA';}
            if(e.target.value == 'Nessuna'){document.getElementById('dato-invio').classList.add('hidden');}
        },
        Locations(e){
            e.target.style.border = '1.5px solid #B4B4B4';
            if(e.target.value != 'Italy' && e.target.value != '---'){
                document.getElementById('other-country').classList.remove('hidden');
                document.getElementById('italia').classList.add('hidden');
            }
            else if(e.target.value == '---'){
                document.getElementById('other-country').classList.add('hidden');
                document.getElementById('italia').classList.add('hidden');
            }
            else if(e.target.value == 'Italy'){
                document.getElementById('other-country').classList.add('hidden');
                document.getElementById('italia').classList.remove('hidden');
            }
        },
        OpenDetails(){
         this.fat = !this.fat;
         if(this.fat){
             document.getElementById('fattura-dati').classList.remove('hidden');
         }
         else{
             document.getElementById('fattura-dati').classList.add('hidden');
         }
        },
        Checkout(){
            let consenti_dati = document.getElementById('consenti-dati');
            let orario_ridotto = document.getElementById('orario-ridotto');
            let chiavi_regola = document.getElementById('chiavi-regola');
            let fattura_conferma = document.getElementById('fattura');
            let nome = document.getElementById('nome');
            let cognome = document.getElementById('cognome');
            let tel = document.getElementById('telefono');
            let targa = document.getElementById('targa');
            let mail = document.getElementById('mail');
            let modello = document.getElementById('modello');
            let msg = document.getElementById('msg');
            let fattura = 0;
            let nazione = document.getElementById('nazione');
            let n_fattura = document.getElementById('n-fattura');
            let r_fattura = document.getElementById('r-fattura');
            let i_fattura = document.getElementById('i-fattura');
            let p_fattura = document.getElementById('p-fattura');
            let ct_fattura = document.getElementById('ct-fattura');

            //Fatturazione straniera
            let provincia = document.getElementById('provincia-it');
            let comune = document.getElementById('comune-it');
            let ragione_it = document.getElementById('ragione-it');
            let citta = document.getElementById('citta-it');
            let indirizzo = document.getElementById('indirizzo-it');
            let cap = document.getElementById('cap-it');
            let p_it = document.getElementById('p-it');
            let mod_invio = document.getElementById('mod-invio');
            let dato_invio = document.getElementById('dato-invio');

            

            if(nome.value == "" || nome.value == undefined){
                        nome.style.border = '1.5px solid red';
                        nome.scrollIntoView();
            }
            else if( cognome.value == "" || cognome.value == undefined){
                       cognome.style.border = '1.5px solid red';
                       cognome.scrollIntoView();
            }
            else if(tel.value == "" || tel.value == undefined){
                tel.style.border = '1.5px solid red';
                tel.scrollIntoView();
            }
            else if(mail.value == "" || mail.value == undefined){
                mail.style.border = '1.5px solid red';
                mail.scrollIntoView();
            }
           
            else if(targa.value == "" || targa.value == undefined){
                targa.style.border = '1.5px solid red';
                targa.scrollIntoView();
            }
            else if(!consenti_dati.checked){
                consenti_dati.scrollIntoView();
                document.getElementById('checkmark-dati').style.border = '1.5px solid red';
            }
              else if(!orario_ridotto.checked){
                orario_ridotto.scrollIntoView();
                document.getElementById('checkmark-orario').style.border = '1.5px solid red';
            }
            else if(!chiavi_regola.checked){
                chiavi_regola.scrollIntoView();
                document.getElementById('checkmark-chiavi').style.border = '1.5px solid red';
            }

            else if(modello.value == "" || modello.value == undefined){
                
                document.getElementById('popup-modal').classList.remove('hidden');
                
               
            }else{
                this.modello_consenti = 1;
            }

            if(this.modello_consenti == 1){
             if(fattura_conferma.checked){
                fattura = 1;
                if(nazione.value == "" || nazione.value == undefined || nazione.value == '---'){
                    nazione.style.border = '1.5px solid red';
                }

                if(nazione.value != "Italy"){
                    if(n_fattura.value == "" || n_fattura.value == undefined){
                        n_fattura.style.border = '1.5px solid red';
                    }
                    else if(r_fattura.value == "" || r_fattura.value == undefined){
                        r_fattura.style.border = '1.5px solid red';
                    }
                    else if(i_fattura.value == "" || i_fattura.value == undefined){
                        i_fattura.style.border = '1.5px solid red';
                    }
                    else if(ct_fattura.value == "" || ct_fattura.value == undefined){
                        ct_fattura.style.border = '1.5px solid red';
                    }
                    else if(p_fattura.value == "" || p_fattura.value == undefined){
                        p_fattura.style.border = '1.5px solid red';
                    }
                    else{
                        this.$router.push('/checkout?di='+this.data_i+'&oi='+this.ora_i+'&of='+this.ora_f+'&df='+this.data_f+'&n='+nome.value+'&c='+cognome.value+'&tel='+tel.value+'&m='+mail.value+'&tg='+targa.value+'&md='+modello.value+'&msg='+msg.value+'&f='+fattura+'&nat='+nazione.value+'&nf='+n_fattura.value+'&rag_it='+r_fattura.value+'&ind='+i_fattura.value+'&ct_it='+ct_fattura.value+'&p_it='+p_fattura.value+'&vt='+this.vt+'&v='+this.v)
                    }
                }
                else{
                    //FATTURA ITALIANA
                    

                    if(mod_invio.value != 'Nessuna'){
                        if(dato_invio.value == "" || dato_invio.value == undefined){
                            dato_invio.style.border = '1.5px solid red';
                            dato_invio.scrollIntoView();
                        }
                    
                    else if(ragione_it.value == "" || ragione_it.value == undefined){ragione_it.style.border = '1.5px solid red'; ragione_it.scrollIntoView();}
                   else if(provincia.value == "" || provincia.value == undefined ){provincia.style.border = '1.5px solid red'; provincia.scrollIntoView();}
                    else if(comune.value == "" || comune.value == undefined){comune.style.border='1.5px solid red'; comune.scrollIntoView();}
                   else if(indirizzo.value == "" || indirizzo.value == undefined){indirizzo.style.border = '1.5px solid red'; indirizzo.scrollIntoView();}
                    else if(citta.value == "" || citta.value == undefined){citta.style.border = '1.5px solid red'; citta.scrollIntoView();}
                    else if(cap.value == "" || cap.value == undefined){cap.style.border = '1.5px solid red'; cap.scrollIntoView();}
                    else if (p_it.value == "" || p_it.value == undefined){p_it.style.border = '1.5px solid red'; p_it.scrollIntoView();}
                    
                    
                    else{
                        //REDIRECT CON MODALITA' DI INVIO
                        this.$router.push('/checkout?di='+this.data_i+'&oi='+this.ora_i+'&of='+this.ora_f+'&df='+this.data_f+'&n='+nome.value+'&c='+cognome.value+'&tel='+tel.value+'&m='+mail.value+'&tg='+targa.value+'&md='+modello.value+'&msg='+msg.value+'&f='+fattura+'&nat='+nazione.value+'&md_send='+mod_invio.value+'&dt_send='+dato_invio.value+'&rag_it='+ragione_it.value+'&prv='+provincia.value+'&com='+comune.value+'&ind='+indirizzo.value+'&ct_it='+citta.value+'&cap='+cap.value+'&p_it='+p_it.value+'&vt='+this.vt+'&v='+this.v)
                            
                        }
                    }
                    else if(ragione_it.value == "" || ragione_it.value == undefined){ragione_it.style.border = '1.5px solid red'; ragione_it.scrollIntoView();}
                   else if(provincia.value == "" || provincia.value == undefined ){provincia.style.border = '1.5px solid red'; provincia.scrollIntoView();}
                    else if(comune.value == "" || comune.value == undefined){comune.style.border='1.5px solid red'; comune.scrollIntoView();}
                   else if(indirizzo.value == "" || indirizzo.value == undefined){indirizzo.style.border = '1.5px solid red'; indirizzo.scrollIntoView();}
                    else if(citta.value == "" || citta.value == undefined){citta.style.border = '1.5px solid red'; citta.scrollIntoView();}
                    else if(cap.value == "" || cap.value == undefined){cap.style.border = '1.5px solid red'; cap.scrollIntoView();}
                    else if (p_it.value == "" || p_it.value == undefined){p_it.style.border = '1.5px solid red'; p_it.scrollIntoView();}
                    else{
                        //REDIRECT SENZA MODALITA' DI INVIO
                        this.$router.push('/checkout?di='+this.data_i+'&oi='+this.ora_i+'&of='+this.ora_f+'&df='+this.data_f+'&n='+nome.value+'&c='+cognome.value+'&tel='+tel.value+'&m='+mail.value+'&tg='+targa.value+'&md='+modello.value+'&msg='+msg.value+'&f='+fattura+'&nat='+nazione.value+'&md_send='+mod_invio.value+'&rag_it='+ragione_it.value+'&prv='+provincia.value+'&com='+comune.value+'&ind='+indirizzo.value+'&ct_it='+citta.value+'&cap='+cap.value+'&p_it='+p_it.value+'&vt='+this.vt+'&v='+this.v)
                    }
                }
            }
            else{
                fattura = 0;
                this.$router.push('/checkout?di='+this.data_i+'&oi='+this.ora_i+'&of='+this.ora_f+'&df='+this.data_f+'&n='+nome.value+'&c='+cognome.value+'&tel='+tel.value+'&m='+mail.value+'&tg='+targa.value+'&md='+modello.value+'&msg='+msg.value+'&f='+fattura+'&vt='+this.vt+'&v='+this.v);
                
            }
          }
        }
    }
   
}
</script>

<style>

.veicolo-w svg{
    height: 70px !important;
    width: 70px;

}
.custom-checkbox{
    display: block;
  position: relative;

  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  border: 2px solid #B4B4B4;
  position: absolute;
  top: 0;
  left: 0;
  height: 17px;
  width: 17px;
  background-color: transparent;
}

/* When the checkbox is checked, add a blue background */
.custom-checkbox input:checked ~ .checkmark {
  background-color: #2196F3;
  border: 0;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.custom-checkbox .checkmark:after {
  left: 5px;
  top: 3px;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>