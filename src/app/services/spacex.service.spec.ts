import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SpacexService } from './spacex.service';
import { Launchpad } from '../interfaces/launchpad';
import { Landpad } from '../interfaces/landpad';
import { Launch } from '../interfaces/launch';

describe('SpacexService', () => {
  let service: SpacexService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpacexService]
    });
    service = TestBed.inject(SpacexService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('fetch launchpads', () => {
    const TestLaunchpads: Launchpad[] = [
      {
        id: '5e9e4501f5090910d4566f83',
        name: 'VAFB SLC 3W',
        images: {
          large: [
            'https://i.imgur.com/7uXe1Kv.png'
          ]
        },
        full_name: 'Vandenberg Space Force Base Space Launch Complex 3W',
        locality: 'Vandenberg Space Force Base',
        region: 'California',
        latitude: 34.6440904,
        longitude: -120.5931438,
        launch_attempts: 0,
        launch_successes: 0,
        rockets: [
          '5e9d0d95eda69955f709d1eb'
        ],
        timezone: 'America/Los_Angeles',
        launches: [],
        status: 'retired',
        details: "SpaceX's original west coast launch pad for Falcon 1. It was used in a static fire test but was never employed for a launch, and was abandoned due to range scheduling conflicts arising from overflying other active pads."
      }
    ];

    service.getLaunchpads().subscribe(launchpads => {
      expect(launchpads.length).toBe(1);
      expect(launchpads).toEqual(TestLaunchpads);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/launchpads`);
    expect(req.request.method).toBe('GET');
    req.flush(TestLaunchpads);
  });

  it('fetch landpads', () => {
    const TestLandpads: Landpad[] = [
      {
        id: "5e9e3032383ecb267a34e7c7",
        name: "LZ-1",
        images: { large: ["https://i.imgur.com/KHBk6jO.png"] },
        full_name: "Landing Zone 1",
        status: "active",
        type: "RTLS",
        locality: "Cape Canaveral",
        region: "Florida",
        latitude: 28.485833,
        longitude: -80.544444,
        landing_attempts: 21,
        landing_successes: 20,
        wikipedia: "https://en.wikipedia.org/wiki/Landing_Zones_1_and_2",
        details: "SpaceX's first east coast landing pad is Landing Zone 1, where the historic first Falcon 9 landing occurred in December 2015. LC-13 was originally used as a launch pad for early Atlas missiles and rockets from Lockheed Martin. LC-1 was later expanded to include Landing Zone 2 for side booster RTLS Falcon Heavy missions, and it was first used in February 2018 for that purpose.",
        launches: [
          "5eb87cefffd86e000604b342",
          "5eb87cf9ffd86e000604b349",
          "5eb87cfeffd86e000604b34d",
          "5eb87d01ffd86e000604b350",
          "5eb87d03ffd86e000604b352",
          "5eb87d07ffd86e000604b356",
          "5eb87d09ffd86e000604b358",
          "5eb87d0effd86e000604b35c",
          "5eb87d10ffd86e000604b35e",
          "5eb87d13ffd86e000604b360",
          "5eb87d26ffd86e000604b371",
          "5eb87d2dffd86e000604b376",
          "5eb87d35ffd86e000604b37a",
          "5eb87d36ffd86e000604b37b",
          "5eb87d42ffd86e000604b384",
          "5eb87d47ffd86e000604b38a",
          "5f8399fb818d8b59f5740d43",
          "600f9b6d8f798e2a4d5f979f",
          "61bf3e31cd5ab50b0d936345",
          "6161d32d6db1a92bfba85359",
          "6243ae24af52800c6e919258"
        ]
      }
    ];

    service.getLandpads().subscribe(landpads => {
      expect(landpads.length).toBe(1);
      expect(landpads).toEqual(TestLandpads);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/Landpads`);
    expect(req.request.method).toBe('GET');
    req.flush(TestLandpads);
  });

  it('fetch launches', () => {
    const TestLaunches: Launch[] = [
      {
        fairings: {
          reused: false,
          recovery_attempt: false,
          recovered: false,
          ships: []
        },
        links: {
          patch: {
            small: "https://images2.imgbox.com/94/f2/NN6Ph45r_o.png",
            large: "https://images2.imgbox.com/5b/02/QcxHUb5V_o.png"
          },
          reddit: {
            campaign: null,
            launch: null,
            media: null,
            recovery: null
          },
          flickr: {
            small: [],
            original: []
          },
          presskit: null,
          webcast: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
          youtube_id: "0a_00nJ_Y88",
          article: "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
          wikipedia: "https://en.wikipedia.org/wiki/DemoSat"
        },
        static_fire_date_utc: "2006-03-17T00:00:00.000Z",
        static_fire_date_unix: 1142553600,
        net: false,
        window: 0,
        rocket: "5e9d0d95eda69955f709d1eb",
        success: false,
        failures: [
          {
            time: 33,
            altitude: null,
            reason: "merlin engine failure"
          }
        ],
        details: "Engine failure at 33 seconds and loss of vehicle",
        crew: [],
        ships: [],
        capsules: [],
        payloads: [
          "5eb0e4b5b6c3bb0006eeb1e1"
        ],
        launchpad: "5e9e4502f5090995de566f86",
        flight_number: 1,
        name: "FalconSat",
        date_utc: "2006-03-24T22:30:00.000Z",
        date_unix: 1143239400,
        date_local: "2006-03-25T10:30:00+12:00",
        date_precision: "hour",
        upcoming: false,
        cores: [
          {
            core: "5e9e289df35918033d3b2623",
            flight: 1,
            gridfins: false,
            legs: false,
            reused: false,
            landing_attempt: false,
            landing_success: null,
            landing_type: null,
            landpad: null
          }
        ],
        auto_update: true,
        tbd: false,
        launch_library_id: null,
        id: "5eb87cd9ffd86e000604b32a"
      }
    ];

    service.getLaunches().subscribe(launches => {
      expect(launches.length).toBe(1);
      expect(launches).toEqual(TestLaunches);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/launches`);
    expect(req.request.method).toBe('GET');
    req.flush(TestLaunches);
  });
});
