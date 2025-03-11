sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement/mitigations/test/integration/FirstJourney',
		'riskmanagement/mitigations/test/integration/pages/MitigationsList',
		'riskmanagement/mitigations/test/integration/pages/MitigationsObjectPage'
    ],
    function(JourneyRunner, opaJourney, MitigationsList, MitigationsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement/mitigations') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMitigationsList: MitigationsList,
					onTheMitigationsObjectPage: MitigationsObjectPage
                }
            },
            opaJourney.run
        );
    }
);