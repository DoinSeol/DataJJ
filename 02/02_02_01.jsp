	<!-- 차트 생성을 위한 JS 영역 -->
	<script type="text/javascript" src="../data/dashboard/js/amchart/core.js"></script>
	<script type="text/javascript" src="../data/dashboard/js/amchart/charts.js"></script>
	<script type="text/javascript" src="../data/dashboard/js/amchart/animated.js"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="./js/visualization/chart_01.js"></script>


<!-- 서브 콘텐츠::02_02_통계시각화 -->
            <!-- <h2 class="sub_cont_title"></h2> -->
            
            
            <!-- 탭메뉴_1deps -->
            <div class="visual_menu_btn_area dep1 flex_r_ss flex_wrap tab_style_RS">
              <button class="btn visual_menu_btn_tab act" data-depth="0" data-idx="0" data-tab="chart_box_01" onclick="location.href='content.do?cmsid=101020201000'">인구·교육</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="1" data-tab="chart_box_02" onclick="location.href='content.do?cmsid=101020202000'">보건·복지</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="2" data-tab="chart_box_03" onclick="location.href='content.do?cmsid=101020203000'">경제·산업</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="3" data-tab="chart_box_04" onclick="location.href='content.do?cmsid=101020204000'">환경·녹지</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="4" data-tab="chart_box_05" onclick="location.href='content.do?cmsid=101020205000'">교통·안전</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="5" data-tab="chart_box_06" onclick="location.href='content.do?cmsid=101020206000'">관광·문화</button>
            </div>

            <div class="sub_cont_inner visual_tab_wrap visual_tab_area">
              
              <!-- 탭메뉴_2deps -->
              <!-- 01_인구·교육 --------------------------------------------------------------------------------->
              <div id="chart_box_01" class="visual_menu_content_area content_area dep1_cont act" data-depth="0" data-idx="0">
                <div class="visual_tab_area">
                  <div class="visual_menu_btn_area dep2 flex_r_ss flex_wrap">
                    <button class="btn visual_menu_btn_tab act" data-depth="1" data-idx="0" data-tab="chart_box_01_01">주민등록인구 현황</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="1" data-tab="chart_box_01_02">연도별 인구 및 세대</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="2" data-tab="chart_box_01_03">동별 세대 및 인구</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="3" data-tab="chart_box_01_04">연령계층별 인구</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="4" data-tab="chart_box_01_05">인구동향(출생,사망,혼인,이혼)</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="5" data-tab="chart_box_01_06">연도별 인구이동</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="6" data-tab="chart_box_01_07">학교, 학생 수</button>
                  </div>
            
                  <!-- 01_인구·교육차트 ------------------------------------------------------------------------>
                  <!-- 01_01_주민등록인구현황 ---------------------------------------------------------------->
                  <div id="chart_box_01_01" class="visual_menu_content_area content_area dep2_cont act" data-depth="1" data-idx="0">
                    <h2 class="sub_cont_sub_title">주민등록인구 현황</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2023-10</p>
                      <p>단위 : 명(외국인제외)</p>
                    </div>
                    <div class="chart clear flex_r_ss flex_wrap">
                      <div class="wd_half">
                        <dl>
                          <dt>인구</dt>
                          <dd>
                            <div id="chart_01_01_01" class="population_graph01">
                              <!--차트영역-->
                            </div>
                            <div id="chart_01_01_02" class="population_graph02">
                              <!--차트영역-->
                            </div>
                          </dd>
                        </dl>
                      </div>
                      <div class="wd_half map_area">
                        <dl>
                          <dt>행정구별 현황</dt>
                          <dd>
                            <ul>
                              <li class="deokjin"><span>덕진구</span><strong>316,137</strong></li>
                              <li class="wansan"><span>완산구</span><strong>328,772</strong></li>
                            </ul>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>주민등록인구통계 행정안전부
                    </div>
                  </div>

                  <!-- 01_02_연도별 인구 및 세대 ---------------------------------------------------------------->
                  <div id="chart_box_01_02" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="1">
                    <h2 class="sub_cont_sub_title">연도별 인구 및 세대</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2023-10</p>
                      <p>단위 : 명(외국인제외)</p>
                    </div>
                    <div class="chart clear">
                      <div id="chart_01_02" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>주민등록인구통계 행정안전부
                    </div>
                  </div>

                  <!-- 01_03_동별세대및인구 ---------------------------------------------------------------->
                  <div id="chart_box_01_03" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="2">
                    <h2 class="sub_cont_sub_title">동별 세대 및 인구</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2023-10</p>
                      <p>단위 : 명</p>
                    </div>
                    <div class="chart" style="overflow:hidden; overflow-x:scroll;">
                      <!-- <div id="chart_01_03" class="chart_height"> -->
                      <div style="width:2100px;" id="chart_01_03" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>주민등록인구통계 행정안전부
                    </div>
                  </div>

                  <!-- 01_04_연령계층별인구 ---------------------------------------------------------------->
                  <div id="chart_box_01_04" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="3">
                    <h2 class="sub_cont_sub_title">연령계층별 인구</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2023-10</p>
                      <p>단위 : 명</p>
                    </div>
                    <div class="chart">
                      <div id="chart_01_04" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>주민등록인구통계 행정안전부
                    </div>
                  </div>

                  <!-- 01_05_인구동향(출생,사망,혼인,이혼) ---------------------------------------------------------------->
                  <div id="chart_box_01_05" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="4">
                    <h2 class="sub_cont_sub_title">인구동향(출생,사망,혼인,이혼)</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2022-12</p>
                      <p>단위 : 명</p>
                    </div>
                    <div class="chart">
                      <div id="chart_01_05" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「인구동향조사」통계청 인구동향과
                    </div>
                  </div>

                  <!-- 01_06_연도별 인구이동 ---------------------------------------------------------------->
                  <div id="chart_box_01_06" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="5">
                    <h2 class="sub_cont_sub_title">연도별 인구이동</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2022-12</p>
                      <p>단위 : 명</p>
                    </div>
                    <div class="chart">
                      <div id="chart_01_06" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「국내인구이동통계」통계청 인구동향과
                    </div>
                  </div>

                  <!-- 01_07_학교,학생수 ---------------------------------------------------------------->
                  <div id="chart_box_01_07" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="6">
                    <h2 class="sub_cont_sub_title">학교, 학생 수</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2023-04</p>
                      <p>단위 : 명</p>
                    </div>
                    <div class="chart">
                      <div id="chart_01_07" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「교육통계」전라북도교육청
                    </div>
                  </div>
                </div>
              </div>

            </div>