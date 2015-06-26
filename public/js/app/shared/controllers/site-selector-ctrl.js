﻿/**
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2014 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 */

'use strict';

angular.module('ds.shared')
    .controller('siteSelectorController', ['$rootScope', '$scope', 'GlobalData','SiteSelectorSvc',
        function ($rootScope, $scope, GlobalData, SiteSelectorSvc) {

            $scope.sites = GlobalData.getSites();
            $scope.selectedSite = GlobalData.getSite();
            $scope.hoveredSite = {};
            $scope.selectedLanguage = GlobalData.getLanguageCode();

            $scope.setHoveredSite = function (site) {
                $scope.hoveredSite = site;
            };

            $scope.selectSiteAndLanguage = function (site, language) {
                var previousCode = $scope.selectedSite.code;
                var previousLanguage = $scope.selectedLanguage;

                $scope.selectedSite = site;
                $scope.selectedLanguage = language;

                //Only apply changes if site or language changed
                if (previousCode !== $scope.selectedSite.code) {
                    //Update cart and etc.
                    SiteSelectorSvc.changeSite(site);
                }
                if (previousLanguage !== $scope.selectedLanguage) {
                    GlobalData.setLanguage(language);
                }
            };
        }
    ]);
