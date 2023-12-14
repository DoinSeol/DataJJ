	<!-- 차트 생성을 위한 JS 영역 -->
	<script type="text/javascript" src="../data/dashboard/js/amchart/core.js"></script>
	<script type="text/javascript" src="../data/dashboard/js/amchart/charts.js"></script>
	<script type="text/javascript" src="../data/dashboard/js/amchart/animated.js"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="./js/visualization/chart_03.js"></script>


<!-- 서브 콘텐츠::02_02_통계시각화 -->
            <!-- <h2 class="sub_cont_title"></h2> -->
            
            
            <!-- 탭메뉴_1deps -->
            <div class="visual_menu_btn_area dep1 flex_r_ss flex_wrap tab_style_RS">
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="0" data-tab="chart_box_01" onclick="location.href='content.do?cmsid=101020201000'">인구·교육</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="1" data-tab="chart_box_02" onclick="location.href='content.do?cmsid=101020202000'">보건·복지</button>
              <button class="btn visual_menu_btn_tab act" data-depth="0" data-idx="2" data-tab="chart_box_03" onclick="location.href='content.do?cmsid=101020203000'">경제·산업</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="3" data-tab="chart_box_04" onclick="location.href='content.do?cmsid=101020204000'">환경·녹지</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="4" data-tab="chart_box_05" onclick="location.href='content.do?cmsid=101020205000'">교통·안전</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="5" data-tab="chart_box_06" onclick="location.href='content.do?cmsid=101020206000'">관광·문화</button>
            </div>

            <div class="sub_cont_inner visual_tab_wrap visual_tab_area">
              
              <!-- 탭메뉴_2deps -->

              <!-- 03_경제·산업 --------------------------------------------------------------------------------->
              <div id="chart_box_03" class="visual_menu_content_area content_area dep1_cont act" data-depth="0" data-idx="2">
                <div class="visual_tab_area">
                  <div class="visual_menu_btn_area dep2 flex_r_ss flex_wrap">
                    <button class="btn visual_menu_btn_tab act" data-depth="1" data-idx="0" data-tab="chart_box_03_01">전주시 고용률·실업률</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="1" data-tab="chart_box_03_02">청년층(15~29세) 고용률</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="2" data-tab="chart_box_03_03">전주시 취업자·실업자</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="3" data-tab="chart_box_03_04">비경제활동인구</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="4" data-tab="chart_box_03_05">산업별 취업자</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="5" data-tab="chart_box_03_06">직업별 취업자</button>
                  </div>
                  
                  <!-- 03_경제·산업차트 ------------------------------------------------------------------------>
                  <!-- 03_01_전주시고용률·실업률 ---------------------------------------------------------------->
                  <div id="chart_box_03_01" class="visual_menu_content_area content_area dep2_cont act" data-depth="1" data-idx="0">
                    <h2 class="sub_cont_sub_title">전주시 고용률·실업률</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2022-12</p>
                      <p>단위 : %</p>
                    </div>
                    <div class="chart">
                      <div id="chart_03_01" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「지역별고용조사」통계청 고용통계과
                    </div>
                  </div>

                  <!-- 03_02_청년층(15~29세)고용률 ---------------------------------------------------------------->
                  <div id="chart_box_03_02" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="1">
                    <h2 class="sub_cont_sub_title">청년층(15~29세) 고용률</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2022-12</p>
                      <p>단위 : %</p>
                    </div>
                    <div class="chart">
                      <div id="chart_03_02" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「지역별고용조사」통계청 고용통계과
                    </div>
                  </div>

                  <!-- 03_03_전주시취업자·실업자 ---------------------------------------------------------------->
                  <div id="chart_box_03_03" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="2">
                    <h2 class="sub_cont_sub_title">전주시 취업자·실업자</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : </p>
                      <p>단위 : </p>
                    </div>
                    <div class="chart">
                      <div id="chart_03_03" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「」
                    </div>
                  </div>

                  <!-- 03_04_비경제활동인구 ---------------------------------------------------------------->
                  <div id="chart_box_03_04" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="3">
                    <h2 class="sub_cont_sub_title">비경제활동인구</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2022-12</p>
                      <p>단위 : 천명</p>
                    </div>
                    <div class="chart">
                      <div id="chart_03_04" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「지역별고용조사」통계청 고용통계과
                    </div>
                  </div>

                  <!-- 03_05_산업별취업자 ---------------------------------------------------------------->
                  <div id="chart_box_03_05" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="4">
                    <h2 class="sub_cont_sub_title">산업별 취업자</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2022-12</p>
                      <p>단위 : 천명</p>
                    </div>
                    <div class="chart">
                      <div id="chart_03_05" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「지역별고용조사」통계청 고용통계과
                    </div>
                  </div>

                  <!-- 03_06_직업별취업자 ---------------------------------------------------------------->
                  <div id="chart_box_03_06" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="5">
                    <h2 class="sub_cont_sub_title">직업별 취업자</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2022-12</p>
                      <p>단위 : 천명</p>
                    </div>
                    <div class="chart">
                      <div id="chart_03_06" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「지역별고용조사」통계청 고용통계과
                    </div>
                  </div>

                </div>
              </div>

            </div>



