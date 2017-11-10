const hrReps = {
 "kind": "civicinfo#representativeInfoResponse",
 "normalizedInput": {
  "line1": "944 Market Street",
  "city": "San Francisco",
  "state": "CA",
  "zip": "94102"
 },
 "divisions": {
  "ocd-division/country:us": {
   "name": "United States",
   "officeIndices": [
    0,
    1
   ]
  },
  "ocd-division/country:us/state:ca": {
   "name": "California",
   "officeIndices": [
    2,
    4,
    5,
    17,
    18,
    19,
    20,
    21,
    22
   ]
  },
  "ocd-division/country:us/state:ca/cd:12": {
   "name": "California's 12th congressional district",
   "officeIndices": [
    3
   ]
  },
  "ocd-division/country:us/state:ca/county:san_francisco": {
   "name": "San Francisco County",
   "alsoKnownAs": [
    "ocd-division/country:us/state:ca/place:san_francisco"
   ],
   "officeIndices": [
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
   ]
  },
  "ocd-division/country:us/state:ca/county:san_francisco/council_district:6": {
   "name": "San Francisco CA city-county council district 6",
   "officeIndices": [
    16
   ]
  },
  "ocd-division/country:us/state:ca/sldl:17": {
   "name": "California Assembly district 17",
   "officeIndices": [
    7
   ]
  },
  "ocd-division/country:us/state:ca/sldu:11": {
   "name": "California State Senate district 11",
   "officeIndices": [
    6
   ]
  }
 },
 "offices": [
  {
   "name": "President of the United States",
   "divisionId": "ocd-division/country:us",
   "levels": [
    "country"
   ],
   "roles": [
    "headOfState",
    "headOfGovernment"
   ],
   "officialIndices": [
    0
   ]
  },
  {
   "name": "Vice-President of the United States",
   "divisionId": "ocd-division/country:us",
   "levels": [
    "country"
   ],
   "roles": [
    "deputyHeadOfGovernment"
   ],
   "officialIndices": [
    1
   ]
  },
  {
   "name": "United States Senate",
   "divisionId": "ocd-division/country:us/state:ca",
   "levels": [
    "country"
   ],
   "roles": [
    "legislatorUpperBody"
   ],
   "officialIndices": [
    2,
    3
   ]
  },
  {
   "name": "United States House of Representatives CA-12",
   "divisionId": "ocd-division/country:us/state:ca/cd:12",
   "levels": [
    "country"
   ],
   "roles": [
    "legislatorLowerBody"
   ],
   "officialIndices": [
    4
   ]
  },
  {
   "name": "Governor",
   "divisionId": "ocd-division/country:us/state:ca",
   "levels": [
    "administrativeArea1"
   ],
   "roles": [
    "headOfGovernment"
   ],
   "officialIndices": [
    5
   ]
  },
  {
   "name": "Lieutenant Governor",
   "divisionId": "ocd-division/country:us/state:ca",
   "levels": [
    "administrativeArea1"
   ],
   "roles": [
    "deputyHeadOfGovernment"
   ],
   "officialIndices": [
    6
   ]
  },
  {
   "name": "CA State Senate District 11",
   "divisionId": "ocd-division/country:us/state:ca/sldu:11",
   "levels": [
    "administrativeArea1"
   ],
   "roles": [
    "legislatorUpperBody"
   ],
   "officialIndices": [
    7
   ]
  },
  {
   "name": "CA State Assembly District 17",
   "divisionId": "ocd-division/country:us/state:ca/sldl:17",
   "levels": [
    "administrativeArea1"
   ],
   "roles": [
    "legislatorLowerBody"
   ],
   "officialIndices": [
    8
   ]
  },
  {
   "name": "Mayor",
   "divisionId": "ocd-division/country:us/state:ca/county:san_francisco",
   "officialIndices": [
    9
   ]
  },
  {
   "name": "Sheriff",
   "divisionId": "ocd-division/country:us/state:ca/county:san_francisco",
   "officialIndices": [
    10
   ]
  },
  {
   "name": "Treasurer",
   "divisionId": "ocd-division/country:us/state:ca/county:san_francisco",
   "officialIndices": [
    11
   ]
  },
  {
   "name": "County Clerk",
   "divisionId": "ocd-division/country:us/state:ca/county:san_francisco",
   "officialIndices": [
    12
   ]
  },
  {
   "name": "City Attorney",
   "divisionId": "ocd-division/country:us/state:ca/county:san_francisco",
   "officialIndices": [
    13
   ]
  },
  {
   "name": "Assessor-Recorder",
   "divisionId": "ocd-division/country:us/state:ca/county:san_francisco",
   "officialIndices": [
    14
   ]
  },
  {
   "name": "District Attorney",
   "divisionId": "ocd-division/country:us/state:ca/county:san_francisco",
   "officialIndices": [
    15
   ]
  },
  {
   "name": "San Francisco County Superior Court Judge",
   "divisionId": "ocd-division/country:us/state:ca/county:san_francisco",
   "officialIndices": [
    16
   ]
  },
  {
   "name": "Board of Supervisors, District 6",
   "divisionId": "ocd-division/country:us/state:ca/county:san_francisco/council_district:6",
   "officialIndices": [
    17
   ]
  },
  {
   "name": "State Treasurer",
   "divisionId": "ocd-division/country:us/state:ca",
   "officialIndices": [
    18
   ]
  },
  {
   "name": "Attorney General",
   "divisionId": "ocd-division/country:us/state:ca",
   "officialIndices": [
    19
   ]
  },
  {
   "name": "State Controller",
   "divisionId": "ocd-division/country:us/state:ca",
   "officialIndices": [
    20
   ]
  },
  {
   "name": "Secretary of State",
   "divisionId": "ocd-division/country:us/state:ca",
   "officialIndices": [
    21
   ]
  },
  {
   "name": "Insurance Commissioner",
   "divisionId": "ocd-division/country:us/state:ca",
   "officialIndices": [
    22
   ]
  },
  {
   "name": "State Superintendent of Public Instruction",
   "divisionId": "ocd-division/country:us/state:ca",
   "officialIndices": [
    23
   ]
  }
 ],
 "officials": [
  {
   "name": "Donald J. Trump",
   "address": [
    {
     "line1": "The White House",
     "line2": "1600 Pennsylvania Avenue NW",
     "city": "Washington",
     "state": "DC",
     "zip": "20500"
    }
   ],
   "party": "Republican",
   "phones": [
    "(202) 456-1111"
   ],
   "urls": [
    "http://www.whitehouse.gov/"
   ],
   "photoUrl": "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/PE%20Color.jpg",
   "channels": [
    {
     "type": "GooglePlus",
     "id": "+whitehouse"
    },
    {
     "type": "Facebook",
     "id": "whitehouse"
    },
    {
     "type": "Twitter",
     "id": "potus"
    },
    {
     "type": "YouTube",
     "id": "whitehouse"
    }
   ]
  },
  {
   "name": "Mike Pence",
   "address": [
    {
     "line1": "The White House",
     "line2": "1600 Pennsylvania Avenue NW",
     "city": "Washington",
     "state": "DC",
     "zip": "20500"
    }
   ],
   "party": "Republican",
   "phones": [
    "(202) 456-1111"
   ],
   "urls": [
    "http://www.whitehouse.gov/"
   ],
   "photoUrl": "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg",
   "channels": [
    {
     "type": "GooglePlus",
     "id": "+whitehouse"
    },
    {
     "type": "Facebook",
     "id": "whitehouse"
    },
    {
     "type": "Twitter",
     "id": "VP"
    }
   ]
  },
  {
   "name": "Dianne Feinstein",
   "address": [
    {
     "line1": "331 Hart Senate Office Building",
     "city": "Washington",
     "state": "DC",
     "zip": "20510"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(202) 224-3841"
   ],
   "urls": [
    "http://www.feinstein.senate.gov/public/"
   ],
   "photoUrl": "http://bioguide.congress.gov/bioguide/photo/F/F000062.jpg",
   "channels": [
    {
     "type": "Facebook",
     "id": "SenatorFeinstein"
    },
    {
     "type": "Twitter",
     "id": "SenFeinstein"
    },
    {
     "type": "YouTube",
     "id": "SenatorFeinstein"
    }
   ]
  },
  {
   "name": "Kamala D. Harris",
   "address": [
    {
     "line1": "112 Hart Senate Office Building",
     "city": "Washington",
     "state": "DC",
     "zip": "20510"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(202) 224-3553"
   ],
   "urls": [
    "https://www.harris.senate.gov"
   ],
   "photoUrl": "https://www.harris.senate.gov/sites/default/files/harris1.jpg",
   "channels": [
    {
     "type": "Twitter",
     "id": "KamalaHarris"
    },
    {
     "type": "YouTube",
     "id": "UC0XBsJpPhOLg0k4x9ZwrWzw"
    }
   ]
  },
  {
   "name": "Nancy Pelosi",
   "address": [
    {
     "line1": "233 Cannon House Office Building",
     "city": "Washington",
     "state": "DC",
     "zip": "20515"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(202) 225-4965"
   ],
   "urls": [
    "http://pelosi.house.gov/"
   ],
   "photoUrl": "http://bioguide.congress.gov/bioguide/photo/P/P000197.jpg",
   "channels": [
    {
     "type": "Facebook",
     "id": "NancyPelosi"
    },
    {
     "type": "Twitter",
     "id": "NancyPelosi"
    },
    {
     "type": "GooglePlus",
     "id": "+NancyPelosi"
    },
    {
     "type": "YouTube",
     "id": "nancypelosi"
    }
   ]
  },
  {
   "name": "Edmund G. Brown Jr.",
   "address": [
    {
     "line1": "c/o State Capitol",
     "line2": "Suite 1173",
     "city": "Sacramento",
     "state": "CA",
     "zip": "95814"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(916) 445-2841"
   ],
   "urls": [
    "http://gov.ca.gov/home.php"
   ],
   "channels": [
    {
     "type": "GooglePlus",
     "id": "+JerryBrown"
    },
    {
     "type": "Facebook",
     "id": "jerrybrown"
    },
    {
     "type": "Twitter",
     "id": "JerryBrownGov"
    }
   ]
  },
  {
   "name": "Gavin Newsom",
   "address": [
    {
     "line1": "State Capitol",
     "line2": "Suite 1114",
     "city": "Sacramento",
     "state": "CA",
     "zip": "95814"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(916) 445-8994"
   ],
   "urls": [
    "http://www.ltg.ca.gov/"
   ],
   "photoUrl": "http://www.ltg.ca.gov/images/newsimages/i2.png",
   "emails": [
    "gavin@gavinnewsom.com"
   ],
   "channels": [
    {
     "type": "GooglePlus",
     "id": "+GavinNewsom"
    },
    {
     "type": "Facebook",
     "id": "GavinNewsom"
    },
    {
     "type": "Twitter",
     "id": "gavinnewsom"
    }
   ]
  },
  {
   "name": "Scott Wiener",
   "address": [
    {
     "line1": "STATE CAPITOL",
     "line2": "1303 10TH ST RM 5100",
     "city": "Sacramento",
     "state": "CA",
     "zip": "95814"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(415) 557-1300"
   ],
   "urls": [
    "http://sd11.senate.ca.gov/",
    "http://www.scottwiener.com/"
   ],
   "photoUrl": "http://senate.ca.gov/sites/senate.ca.gov/files/senator_photos/wiener.jpg",
   "emails": [
    "senator.wiener@sen.ca.gov"
   ],
   "channels": [
    {
     "type": "Twitter",
     "id": "Scott_Wiener"
    }
   ]
  },
  {
   "name": "David Chiu",
   "address": [
    {
     "line1": "PO BOX 942849",
     "city": "Sacramento",
     "state": "CA",
     "zip": "94249"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(916) 319-2017"
   ],
   "urls": [
    "https://a17.asmdc.org"
   ],
   "photoUrl": "http://assembly.ca.gov/sites/assembly.ca.gov/files/memberphotos/AD17_Chiu_Portrait150_20141201.jpg",
   "emails": [
    "assemblymember.chiu@assembly.ca.gov"
   ],
   "channels": [
    {
     "type": "Twitter",
     "id": "DavidChiu"
    },
    {
     "type": "Facebook",
     "id": "davidchiu.sf"
    }
   ]
  },
  {
   "name": "Edwin M. Lee",
   "address": [
    {
     "line1": "City Hall",
     "line2": "Room 200",
     "line3": "1 Dr. Carlton B. Goodlett Place",
     "city": "San Francisco",
     "state": "CA",
     "zip": "94102"
    }
   ],
   "party": "Nonpartisan",
   "phones": [
    "(415) 554-6141"
   ],
   "urls": [
    "http://sfmayor.org/"
   ],
   "photoUrl": "http://sfmayor.org/Modules/ShowImage.aspx?imageid=205",
   "emails": [
    "mayoredwinlee@sfgov.org"
   ],
   "channels": [
    {
     "type": "GooglePlus",
     "id": "111835610796626268769"
    },
    {
     "type": "Facebook",
     "id": "mayoredwinlee"
    },
    {
     "type": "Twitter",
     "id": "mayoredlee"
    },
    {
     "type": "YouTube",
     "id": "mayoredlee"
    }
   ]
  },
  {
   "name": "Vicki L. Hennessy",
   "address": [
    {
     "line1": "70 Oak Grove St",
     "city": "San Francisco",
     "state": "CA",
     "zip": "94107"
    }
   ],
   "party": "Nonpartisan",
   "phones": [
    "(415) 554-7225"
   ],
   "urls": [
    "http://www.sfsheriff.com"
   ],
   "channels": [
    {
     "type": "Facebook",
     "id": "SFSheriff"
    },
    {
     "type": "Twitter",
     "id": "SheriffSF"
    }
   ]
  },
  {
   "name": "Jose Cisneros",
   "address": [
    {
     "line1": "City Hall",
     "line2": "Room 140",
     "line3": "1 Dr. Carlton B. Goodlett Place",
     "city": "San Francisco",
     "state": "CA",
     "zip": "94102"
    }
   ],
   "party": "Nonpartisan",
   "phones": [
    "(415) 701-2311"
   ],
   "urls": [
    "http://www.sftreasurer.org/"
   ],
   "channels": [
    {
     "type": "Twitter",
     "id": "TreasurerSF"
    }
   ]
  },
  {
   "name": "Karen Hong",
   "address": [
    {
     "line1": "City Hall",
     "line2": "Room 168 1 Dr. Carlton B. Goodlett Place",
     "city": "San Francisco",
     "state": "CA",
     "zip": "94102"
    }
   ],
   "party": "Nonpartisan",
   "phones": [
    "(415) 554-4950"
   ],
   "urls": [
    "http://www.sfgov.org/countyclerk"
   ],
   "emails": [
    "county.clerk@sfgov.org"
   ]
  },
  {
   "name": "Dennis J. Herrera",
   "address": [
    {
     "line1": "City Hall",
     "line2": "Room 234 1 Dr. Carlton B. Goodlett Place",
     "city": "San Francisco",
     "state": "CA",
     "zip": "94102"
    }
   ],
   "party": "Nonpartisan",
   "phones": [
    "(415) 554-4700"
   ],
   "urls": [
    "http://www.sfcityattorney.org/"
   ],
   "emails": [
    "info@sfcityattorney.org"
   ],
   "channels": [
    {
     "type": "Facebook",
     "id": "sfcityattorney"
    },
    {
     "type": "Twitter",
     "id": "sfcityattorney"
    }
   ]
  },
  {
   "name": "Carmen Chu",
   "address": [
    {
     "line1": "1 Dr. Carlton B. Goodlett Place",
     "line2": "City Hall",
     "line3": "Room 190",
     "city": "San Francisco",
     "state": "CA",
     "zip": "94102"
    }
   ],
   "party": "Unknown",
   "phones": [
    "(415) 554-5596"
   ],
   "urls": [
    "http://www.sfassessor.org/"
   ],
   "emails": [
    "assessor@sfgov.org"
   ]
  },
  {
   "name": "George Gascon",
   "address": [
    {
     "line1": "850 Bryant Street,",
     "city": "San Francisco",
     "state": "CA",
     "zip": "94103"
    }
   ],
   "party": "Nonpartisan",
   "phones": [
    "(415) 553-1751"
   ],
   "urls": [
    "http://www.sfdistrictattorney.org/"
   ],
   "emails": [
    "DistrictAttorney@sfgov.org"
   ],
   "channels": [
    {
     "type": "Twitter",
     "id": "SFDAOffice"
    }
   ]
  },
  {
   "name": "Victor Hwang",
   "address": [
    {
     "line1": "850 Bryant St.",
     "line2": "Room 145",
     "city": "San Francisco",
     "state": "CA",
     "zip": "94103"
    }
   ],
   "party": "Nonpartisan",
   "phones": [
    "(415) 551-8550"
   ],
   "urls": [
    "http://www.sfsuperiorcourt.org"
   ]
  },
  {
   "name": "Jane Kim",
   "address": [
    {
     "line1": "1 Dr. Carlton B. Goodlett Place",
     "line2": "Room 244",
     "city": "San Francisco",
     "state": "CA",
     "zip": "94102"
    }
   ],
   "party": "Nonpartisan",
   "phones": [
    "(415) 554-7970"
   ],
   "urls": [
    "http://sfbos.org/supervisor-kim-district-6"
   ],
   "photoUrl": "http://sfbos.org/modules/showimage.aspx?imageid=5861",
   "emails": [
    "Jane.Kim@sfgov.org"
   ],
   "channels": [
    {
     "type": "Twitter",
     "id": "JaneKim"
    },
    {
     "type": "YouTube",
     "id": "UCIthgMDR8DeeB-2DZSiA8RA"
    }
   ]
  },
  {
   "name": "John Chiang",
   "address": [
    {
     "line1": "P.O. Box 942809",
     "city": "Sacramento",
     "state": "CA",
     "zip": "94209"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(916) 653-2995"
   ],
   "urls": [
    "http://www.treasurer.ca.gov/"
   ],
   "channels": [
    {
     "type": "Twitter",
     "id": "STONewsroom"
    }
   ]
  },
  {
   "name": "Xavier Becerra",
   "address": [
    {
     "line1": "Office of the Attorney General",
     "line2": "1300 \"I\" Street",
     "city": "Sacramento",
     "state": "CA",
     "zip": "95814"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(916) 445-9555"
   ],
   "urls": [
    "https://oag.ca.gov/"
   ],
   "channels": [
    {
     "type": "Facebook",
     "id": "XavierBecerra"
    },
    {
     "type": "Twitter",
     "id": "AGBecerra"
    }
   ]
  },
  {
   "name": "Betty T. Yee",
   "address": [
    {
     "line1": "P.O. Box 942850",
     "city": "Sacramento",
     "state": "CA",
     "zip": "94250"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(916) 445-2636"
   ],
   "urls": [
    "http://www.sco.ca.gov/"
   ],
   "channels": [
    {
     "type": "Facebook",
     "id": "137732083043662"
    },
    {
     "type": "Twitter",
     "id": "CAController"
    }
   ]
  },
  {
   "name": "Alex Padilla",
   "address": [
    {
     "line1": "1500 11th Street,",
     "city": "Sacramento",
     "state": "CA",
     "zip": "95814"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(916) 653-7244"
   ],
   "urls": [
    "http://www.sos.ca.gov/"
   ],
   "emails": [
    "secretary.padilla@sos.ca.gov"
   ],
   "channels": [
    {
     "type": "Facebook",
     "id": "CaliforniaSOS"
    },
    {
     "type": "Twitter",
     "id": "CASOSvote"
    }
   ]
  },
  {
   "name": "Dave Jones",
   "address": [
    {
     "line1": "300 Capitol Mall,",
     "city": "Sacramento",
     "state": "CA",
     "zip": "95814"
    }
   ],
   "party": "Democratic",
   "phones": [
    "(916) 492-3500"
   ],
   "urls": [
    "http://www.insurance.ca.gov/"
   ],
   "channels": [
    {
     "type": "GooglePlus",
     "id": "108233445289196913395"
    },
    {
     "type": "Facebook",
     "id": "insurancecagov"
    },
    {
     "type": "Twitter",
     "id": "CDINews"
    }
   ]
  },
  {
   "name": "Tom Torlakson",
   "address": [
    {
     "line1": "1430 N Street,",
     "city": "Sacramento",
     "state": "CA",
     "zip": "95814"
    }
   ],
   "party": "Nonpartisan",
   "phones": [
    "(916) 319-0800"
   ],
   "urls": [
    "http://www.cde.ca.gov/"
   ],
   "emails": [
    "superintendent@cde.ca.gov"
   ],
   "channels": [
    {
     "type": "Facebook",
     "id": "CAEducation"
    },
    {
     "type": "Twitter",
     "id": "cadepted"
    }
   ]
  }
 ]
};