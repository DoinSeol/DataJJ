	<!-- 차트 생성을 위한 JS 영역 -->
	<script type="text/javascript" src="../data/dashboard/js/amchart/core.js"></script>
	<script type="text/javascript" src="../data/dashboard/js/amchart/charts.js"></script>
	<script type="text/javascript" src="../data/dashboard/js/amchart/animated.js"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="./js/visualization/chart_04.js"></script>


<!-- 서브 콘텐츠::02_02_통계시각화 -->
            <!-- <h2 class="sub_cont_title"></h2> -->
            
            
            <!-- 탭메뉴_1deps -->
            <div class="visual_menu_btn_area dep1 flex_r_ss flex_wrap tab_style_RS">
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="0" data-tab="chart_box_01" onclick="location.href='content.do?cmsid=101020201000'">인구·교육</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="1" data-tab="chart_box_02" onclick="location.href='content.do?cmsid=101020202000'">보건·복지</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="2" data-tab="chart_box_03" onclick="location.href='content.do?cmsid=101020203000'">경제·산업</button>
              <button class="btn visual_menu_btn_tab act" data-depth="0" data-idx="3" data-tab="chart_box_04" onclick="location.href='content.do?cmsid=101020204000'">환경·녹지</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="4" data-tab="chart_box_05" onclick="location.href='content.do?cmsid=101020205000'">교통·안전</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="5" data-tab="chart_box_06" onclick="location.href='content.do?cmsid=101020206000'">관광·문화</button>
            </div>

            <div class="sub_cont_inner visual_tab_wrap visual_tab_area">
              
              <!-- 탭메뉴_2deps -->

              <!-- 04_환경·녹지 --------------------------------------------------------------------------------->
              <div id="chart_box_04" class="visual_menu_content_area content_area dep1_cont act" data-depth="0" data-idx="3">
                <div class="visual_tab_area">
                  <div class="visual_menu_btn_area dep2 flex_r_ss flex_wrap">
                    <button class="btn visual_menu_btn_tab act" data-depth="1" data-idx="0" data-tab="chart_box_04_01">월별 기온</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="1" data-tab="chart_box_04_02">월별강수량</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="2" data-tab="chart_box_04_03">미세먼지현황</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="3" data-tab="chart_box_04_04">쓰레기 배출</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="4" data-tab="chart_box_04_05">폐기물 발생 및 재활용 현황</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="5" data-tab="chart_box_04_06">녹지현황(면적)</button>
                  </div>
                  
                  <!-- 04_환경·녹지차트 ------------------------------------------------------------------------>
                  <!-- 04_01_월별기온 ---------------------------------------------------------------->
                  <div id="chart_box_04_01" class="visual_menu_content_area content_area dep2_cont act" data-depth="1" data-idx="0">
                    <h2 class="sub_cont_sub_title">월별 기온</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2023-10</p>
                      <p>단위 : ℃</p>
                    </div>
                    <div class="chart">
                      <div id="chart_04_01" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「기상관측통계」기상청 국가기후데이터센터
                    </div>
                  </div>

                  <!-- 04_02_월별강수량 ---------------------------------------------------------------->
                  <div id="chart_box_04_02" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="1">
                    <h2 class="sub_cont_sub_title">월별강수량</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2023-10</p>
                      <p>단위 : mm</p>
                    </div>
                    <div class="chart">
                      <div id="chart_04_02" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「기상관측통계」기상청 국가기후데이터센터
                    </div>
                  </div>

                  <!-- 04_03_미세먼지현황 ---------------------------------------------------------------->
                  <div id="chart_box_04_03" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="2">
                    <h2 class="sub_cont_sub_title">미세먼지현황</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2023-10</p>
                      <p>단위 : ㎍/㎥</p>
                    </div>
                    <div class="chart">
                      <div id="chart_04_03" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>전라북도 실시간 대기정보시스템
                    </div>
                  </div>

                  <!-- 04_04_쓰레기배출 ---------------------------------------------------------------->
                  <div id="chart_box_04_04" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="3">
                    <h2 class="sub_cont_sub_title">쓰레기 배출</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2021-12</p>
                      <p>단위 : 톤/일, %</p>
                    </div>
                    <div class="chart">
                      <div id="chart_04_04" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「전국 폐기물 발생 및 처리현황」환경부 자원순환정책과
                    </div>
                  </div>

                  <!-- 04_05_폐기물발생및재활용현황 ---------------------------------------------------------------->
                  <div id="chart_box_04_05" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="4">
                    <h2 class="sub_cont_sub_title">폐기물 발생 및 재활용 현황</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2021-12</p>
                      <p>단위 : 톤/일, %</p>
                    </div>
                    <div class="chart">
                      <div id="chart_04_05" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「전국 폐기물 발생 및 처리현황」환경부 자원순환정책과
                    </div>
                  </div>

                  <!-- 04_06_녹지현황(면적) ---------------------------------------------------------------->
                  <div id="chart_box_04_06" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="5">
                    <h2 class="sub_cont_sub_title">녹지현황(면적)</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2021-12</p>
                      <p>단위 : 천㎡</p>
                    </div>
                    <div class="chart">
                      <div id="chart_04_06" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「도시계획현황」한국토지주택공사 공간정보처
                    </div>
                  </div>

                </div>
              </div>

            </div>