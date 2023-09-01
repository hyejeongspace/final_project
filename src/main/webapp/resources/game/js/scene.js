function getScene() {
	window.scene1 = {
		introText: [
		"(19세기 영국의 고풍스러운 박물관 로비. 방문객들이 들어오고 나가는 중."+nick+"가 로비에 들어온다. 레베카 코리스가 "+nick+"를 맞이한다.)",
		'레베카: (우아하게 인사하며) "안녕하세요, '+nick+'. 저는 이 박물관의 관리자 레베카 코리스에요. 보석 사건에 참여해 주셔서 감사합니다."',
		nick+': "안녕하세요, 레베카. 이런 오래된 박물관에서 일어난 보석 사건에 대해 듣고 있었어요. 어떻게 도와드릴까요?"',
		'레베카: "보석이 사라진 이후로 박물관은 큰 혼란에 빠져있습니다. 당신의 추리 능력을 믿고, 우리의 소중한 보석을 찾아주시길 기대하고 있어요."',
		nick+': "물론이죠. 보석 사건에 대해 더 자세한 정보를 알고 싶습니다."',
		'레베카: "그럼 이쪽으로 오시겠어요? 다른 분들을 소개해 드리겠습니다."'
	],
	options: [
		{
			buttonText: "박물관 내부를 조금 더 살펴보고 다목적실로 간다.",
			actionText: [
				"("+nick+"가 주변을 둘러보며 박물관 내부를 살펴본다. 몇몇 전시물과 방문객들의 모습이 보인다. 주변에는 아무런 특이사항이 보이지 않는다.)",
				"("+nick+"가 다목적실로 이동한다.)",
				"(문이 열린다)"
			],
			color: "red"
		},
		{
			buttonText: "레베카를 바로 따라가본다.",
			actionText: [
				"("+nick+"가 레베카를 따라 다목적실 쪽으로 이동한다.)",
				"(문이 열린다)"
			],
			color: "red"
		},
	],
	action: "SELECT",
	sound: "door"
};

window.scene2 = {
	introText: [
		"(다목적실에서 카렌, 빅토르, 에밀리가 "+nick+"를 맞이한다.)",
		'카렌: "안녕하세요, '+nick+'. 저는 박물관의 보안 담당자 카렌 스미스입니다."',
		'빅토르: "저는 이 박물관의 관장 빅토르 위고이네."',
		'에밀리: "안녕하세요, '+nick+'. 저는 보석 컬렉션 관리자 에밀리 루이스에요."',
		nick+': "반갑습니다. 보석 사건을 해결하기 위해 함께 노력하도록 하겠습니다. 그런데 사라진 보석에 대해 더 자세한 사항을 알고 싶어요."',
		'카렌: "보안에 이상이 없었고, 피해자들의 진술도 모두 확인했습니다만, 보석이 사라졌을 때 주위에는 아무런 흔적도 남아있지 않았습니다."',
		'빅토르: "보석이 없어진 그 날에는 수상한 사람은 나도 본적이 없소."',
		'에밀리: "박물관에서 사라진 보석은 매우 귀중한 보물입니다. 우리에게는 매우 소중한 유물이에요."',
		"(음 딱히 아직까지는 이상해보이는 인물은 없어보인다.)",
		nick+': "여기서부터 사건에 대해 더 자세히 알려주세요."',
		'레베카: "이 박물관에서는 \'빛나는 별\'이라 불리는 귀중한 보석이 전시되어 왔습니다. 하지만 최근 몇 주간, 이 보석이 사라졌어요."',
		'카렌: "보석은 박물관 내에 높은 보안 아래에 전시되어 있었는데, 흔적조차 남아있지 않았습니다."',
		'빅토르: "흠 그러면 보석이 발이라도 달려서 알아서 걸어갔나보지 ? 이러려고 돈주고 고용한게 아닐텐데 말이야."',
		'카렌: "무슨 말을 그런식으로 하시는거죠 ? 지금 제가 뭐 훔쳤다 이렇게 생각하시는건가요 ?"',
		'빅토르: "뭐 그럴수도 있는거 아닌가? 일단 자네가 보안 담당자이니 찾지 못하면 책임은 져야할걸세."',
		nick+': "자자 다들 싸우지 마시고 일단 사건에 대해서 조금 더 얘기를 해보죠"',
		'에밀리: "빛나는 별은 이 박물관에 소중한 유물이에요. 이 사건은 꼭 해결해야 합니다. 다들 진정해주세요."',
		"(말하는 것에서 부터 뭔가 남다른 품위가 느껴진다.)",
		nick+': "맞습니다. 다들 일단 진정하시고 보석 사건을 해결하기 위해 우선 층마다 조사를 진행하겠습니다.용의선상에 있는 사람들과 대화도 필요할 것 같군요."',
		'레베카: "그렇게 하세요. 그리고 어떤 단서라도 발견되면 제게 보고해주세요."',
		"(의심 되는 인물과 대화를 해보자)"
	],
	options: [
		{
			buttonText: "에밀리와 대화를 해본다.",
			actionText: [
				'(에밀리와 대화 - 시작)',
				nick+': "에밀리, 당신이 보석 컬렉션을 관리하시는 분이죠? 이 사건과 관련된 정보가 있을까요?"',
				'에밀리: "네, 맞아요. 저는 이 박물관 내의 보석 컬렉션을 관리하고 있습니다. 보석이 사라진 사실을 들었을 때 정말 충격이었어요."',
				nick+': "보석이 사라진 과정에 대해 무언가 이상한 점은 없었나요?"',
				'에밀리: "아니요, 전혀요. \'빛나는 별\'은 실제로 굉장히 귀중한 유물이라서 보안이 철저했습니다. 하지만 어떻게 그렇게 간신히 지킨 보석이 사라진 걸까요..."',
				nick+': "혹시 이 사건과 관련해서 의심스러운 사람이나 이상한 사건을 목격한 적이 있으신가요?"',
				'에밀리: "아뇨, 저는 보석 컬렉션을 관리하면서 주로 박물관 내부에 머무르니까 다른 사람들의 행동을 잘 모르겠어요."',
				nick+': "에밀리, 그렇다면 어떤 단서가 발견되면 제게 보고해주시겠어요?"',
				'에밀리: "네 당연하죠. 보석이 어디로 간 건지 꼭 알아내야 해요. 그 보석은 우리 박물관의 자랑이니까요."',
				nick+': "그렇군요. 보석이 사라진 사건에 대해서 어떤 생각이 드시나요, 에밀리?"',
				'에밀리: "저희 박물관에는  \'빛나는 별\' 외에도 다른 소중한 보석들이 있어요.그 중에는 역사적으로도 중요한 유물들이 많답니다. 그래서 이 사건이 해결되지 않으면 정말 큰 타격을 입게 될 것 같아요."',
				'에밀리: "사실 말씀하자면, 보석이 사라진 사건은 굉장히 의아하다고 생각해요. 박물관의 보안 시스템은 매우 견고한 편이었는데, 그런데도 어떻게 보석이 사라진 걸까요? 아무런 흔적이 없는 것이 가장 이상한 점이에요.',
				nick+': "그렇군요. 혹시 보석 컬렉션을 관리하면서 눈치챈 이상한 일이나 사람들의 이상한 행동은 없었나요?"',
				'에밀리: "음, 저는 주로 박물관 내부에 머무르니까 다른 사람들의 행동을 자세히 알기는 어려웠어요. 하지만 최근에 보석이 사라진 이후로 박물관 내부의 분위기가 좀 더 긴장되고 어색해진 것 같아요."',
				nick+': "긴장되고 어색해진 분위기라구요?"',
				'에밀리: "네, 그렇게 느껴졌어요. 모두가 보석 사건에 대해 걱정하고 있기 때문에 그런 걸지도 모르겠네요. 어쨌든 이 사건을 빨리 해결해야 박물관의 평화를 회복할 수 있을 거에요."',
				nick+': "에밀리, 이 사건을 해결하기 위해 협력해줘서 고마워요."',
				'(에밀리랑 대화를 나눠보니 되게 박물관에 대한 애정심이 강한거처럼 보였다.)'
			],
			color: "orange"
		},
		{
			buttonText: "카렌과 대화를 해본다.",
			actionText: [
				'(카렌과의 대화 시작)',
				'카렌: (불안한 표정으로) '+nick+', 저희가 보안 시스템을 철저히 검토해 보았습니다만, 아무런 이상이 없었습니다. 빛나는 별이 사라진 사건에 대한 저희의 진술을 믿지 않으실 수도 있겠지만, 제가 밝힐 수 있는 사실이라곤 이게 전부입니다."',
				nick+': "카렌, 그럼에도 불구하고 보석이 사라진 사실은 어떻게 설명하시겠어요?"',
				'카렌: "저희도 이 사건을 해결하기 위해 노력하고 있습니다. 보안 시스템을 뚫고 들어온 흔적은 없었습니다."',
				nick+': "그렇군요. 그렇다면 지금까지의 조사 내용을 공유해주실 수 있을까요?"',
				'카렌: "물론이죠. 사건 당시 보안 담당으로서 박물관 내부와 외부를 세밀하게 조사했습니다. 그 결과 아무런 도난 혹은 불법 침입의 흔적이 발견되지 않았습니다."',
				nick+': "카렌, 그럼 이 보석이 사라진 날에는 누가 박물관에 있었나요?"',
				'카렌: "그 날은 보통보다 방문객이 많았습니다. 박물관에는 지역 주민들과 외지인들이 함께 왔었죠. 하지만 제가 직접 확인했을 때, 아무런 이상한 동작이나 의심스러운 인물은 발견되지 않았습니다."',
				nick+': "혹시 해당 보석을 보호하기 위해 특별한 조치를 취했던 게 있나요?"',
				'카렌: "네, 당연히요. 보석은 박물관 내부의 높은 보안 시스템 아래에 전시되었습니다. 해당 전시실은 보안 경비원이 지키고 있었으며, 어떠한 침입도 감지하지 못한 채 사라졌습니다."',
				nick+': "혹시 다른 보안 관련 인원들이나 직원들 중에서 의심스러운 행동이 있었나요?"',
				'카렌: "보안 관련 직원들은 모두 충성심이 강한 사람들이에요. 그런 사람들 중에서 의심할 만한 행동은 없었습니다. 하지만... 어떤 이유로 보석이 사라진 건지는 저도 이해하기 어려운 일이에요."',
				nick+': "카렌, 이 사건을 해결하기 위해 협력해주셔서 감사합니다."',
				'카렌: "당신이 이 사건을 해결하시길 기대하고 있습니다. 저희 박물관의 평화와 보안을 지켜주십시오."',
			],
			color: "green"
		},
		{
			buttonText: "빅토르와 대화를 해본다.",
			actionText: [
				'(빅토르와의 대화 시작)',
				nick+': "빅토르, 당신은 이 박물관의 관장이군요. 보석 사건에 대한 정보가 있을까요?"',
				'빅토르: "그래, 그렇게 귀중한 보석이 사라진다니 정말 놀라워."',
				nick+': "보석이 사라진 날에 무슨 일이 있었나요? 어떤 이상한 사건이나 의심스러운 사람은 없었나요?"',
				'빅토르: "그날은 보안은 잘 지켜지고 있었어. 하지만 보석이 사라진 후에 아무런 흔적도 남아있지 않았지. 직접 확인해봐도 뭐가 없더군."',
				nick+': "그렇군요. 보석이 사라진 사실을 알게 된 이후로 어떤 변화가 있었나요?"',
				'빅토르: "아무래도 주변 사람들이 조심스러워지더군. 이런 보석 사건이 일어나니까 말이야. 나도 밤에는 더 신경을 쓰고 있어."',
				nick+': "네, 일단 알겠습니다."'
			],
			color: "skyblue"
		},
	],
	action: "ALL",
	sound: "",
};

window.scene3 = {
	introText: [
		'(음.. 이렇게 모두와 대화를 나눠보고 나니 보석 사건에 대한 정보들을 모아보니 아직까지는 확실한 단서가 나온거 같지않다.)',
		'(하지만 모든 면에서 사건을 조사하고 이해하는 것이 중요하겠지)',
		'(에밀리부터 조사해보자)'
	],
	options: [
		{
			buttonText: '에밀리를 조사 해 본다.',
			actionText: [
				'(조사 - 에밀리 루이스)',
				nick+': "이곳은 보석 컬렉션의 저장 공간인가요?"',
				'에밀리: "네, 맞아요. 이곳은 박물관 내에서 소중한 보석들을 보관하는 공간이에요."',
				nick+': "보석 컬렉션 내에서 이상한 점이 없었나요?"',
				'에밀리: "전혀 없었어요. 보석 컬렉션은 저희 박물관의 자랑이자 소중한 유물들이 모여 있는 곳이에요."',
				'(에밀리의 안내로 보석 컬렉션 공간을 자세히 조사하기 시작한다.)',
				'(보석들이 아름다운 조명에 비춰져 빛나고 있지만, 뭔가 이상한 점을 발견할 수 있을까 기대하며 주변을 둘러본다.)',
				nick+': "보석 컬렉션.. 정말 아름답군요."',
				'(에밀리는 미소를 지으며 '+nick+'의 반응을 지켜본다.)',
				'에밀리: "네, 이 보석들은 오랜 시간 동안 모아온 소중한 유물들이에요. 하지만 이곳에서 이상한 것은 발견되지 않았어요."',
				'(주변을 살펴보다가 보석들 사이에서 작은 조각 상자 하나를 발견한다. 그것은 보석들 사이에서는 어색하게 느껴진다.)',
				nick+': (작은 조각 상자를 주목하며) "에밀리, 이 작은 조각 상자가 뭔가요? 보석들 사이에서는 어색하게 느껴져요."',
				'(에밀리는 작은 조각 상자를 보며 얼굴을 찡그린다.)',
				'에밀리: "아무래도 이 작은 조각 상자는 여기 있으면 안 되는 물건 같아요. 보석들과 어울리지 않아 보이죠."',
				'(작은 조각 상자를 조사하고, 이것이 사건과 연관이 있을지에 대해 생각해본다.)',
				'(또한 더 많은 단서를 찾기 위해 보석 컬렉션 내부를 둘러볼 계획을 세운다.)'
			],
			color: "orange"
		}
	],
	action: "ALL",
	sound: ""
}

window.scene4 = {
	introText : [
		'(에밀리와 대화를 마쳤다.)',
		'(에밀리의 사무실을 조사해보자.)'
	],
	options : [
		{
			buttonText: '에밀리의 사무실을 조사해본다.',
			actionText: [
				'(에밀리의 사무실로 들어간다.)'
			],
			color: "red",
			gameType : "find_emily"
		}
	],
	action : "GAME",
	sound : "find"
}

window.scene5 = {
	introText: [
		'(에밀리의 사무실 조사 결과)',
		'에밀리의 사무실을 조사한 결과, 단서는 없지만 이상한 종이 하나를 발견했다. ',
		'그러나 방에서 이상한 흔적들이 없었다는 사실이 조금 의아하게 느껴진다. 카렌의 행동을 조금 더 살펴보아야 할 것 같다.',
		'(카렌을 조사해보자)'
	],
	options: [
		{
			buttonText: '카렌을 조사 해 본다.',
			actionText: [
				'(조사 - 카렌 스미스)',
				nick+': "카렌, 보안 담당자로서 이 사건에 대해 어떻게 생각하시나요?"',
				'카렌: "이 사건은 정말 이상하죠. 보안이 철저하게 시행되고 있는데도 보석이 사라진 건 너무 의아해요.."',
				nick+': "보안이 어떻게 이뤄져있었나요?"',
				'카렌: "당시에는 많은 경비원들과 복잡한 잠금장치가 사용되었어요."',
				nick+': "알겠습니다, 그럼 사건 당시에 이상한 점은 없었나요?"',
				'카렌: "그렇습니다. 경비원들도 제 역할을 충실히 해주었고, 보석이 사라진 사실을 확인한 후엔 바로 조사를 시작했습니다."',
				nick+': "피해자들의 진술은 어떻게 되나요?"',
				'카렌: "피해자들은 보석이 사라진 순간에 주위에 아무런 사람이나 동작을 보지 못했다고 합니다. 단서가 하나도 남아있지 않았습니다."',
				nick+': "혹시 사건 당일 다른 직원들의 이상한 행동을 목격한 적이 있나요?"',
				'카렌: "아니요, 특별한 변화나 의심스러운 동작은 없었습니다."',
				nick+': "혹시 이 보석에 대한 역사나 중요한 특징에 대해서 아실만한 정보가 있나요?"',
				'카렌: "이 보석은 박물관 내에서 오랫동안 소중히 보관되어온 것으로 알려져 있습니다. 그 외의 자세한 정보는 박물관 기록에 있을지도 모릅니다."',
				nick+': "알겠습니다. 카렌, 만약에 어떤 단서가 발견되면 꼭 저에게 알려주세요."',
				'카렌: "물론이죠. 사건을 해결하기 위해서라면 어떤 형태의 협력이라도 기꺼이 할게요."'
			],
			color: "green"
		}
	],
	action: "ALL",
	sound: ""
}

window.scene6 = {
	introText : [
		'(카렌과의 대화를 마쳤다.)',
		'(카렌의 사무실을 조사해보자.)'
	],
	options : [
		{
			buttonText: '카렌의 사무실을 조사해본다.',
			actionText: [
				'(카렌의 사무실로 들어간다.)'
			],
			color: "red",
			gameType : "find_caren"
		}
	],
	action : "GAME",
	sound : "find"
}

window.scene7 = {
	introText: [
		'(카렌의 사무실 조사 결과)',
		'카렌의 사무실에서 어떤 흥미로운 편지를 발견했다. 그 편지는 보석 사건과는 무관해 보이지만, 카렌은 어떤 비밀을 숨기고 있는 듯한 느낌을 준다.',
		'이 편지가 어떤 의미를 가지고 있는지 알아내야 할 것이다.',
		'(빅토르를 조사해보자)'
	],
	options: [
		{
			buttonText: '빅토르를 조사 해 본다.',
			actionText: [
				'(조사 - 빅토르 위고)',
				nick+': "빅토르, 반갑습니다. 조금 더 구체적인 조사를 해보려고합니다.',
				'빅토르: "그래. 반갑구만 혹시 날 의심하는겐가 ?"',
				nick+': "우리는 사건을 해결하려고 노력하고 있어요. 모든 가능성을 열어둬야겠지만, 당신이 우리의 수사에 도움을 줄 수 있을 것 같습니다."',
				'빅토르: "나는 이 박물관의 관장이야. 빛나는 별과 같은 중요한 보석이 사라진 건 이 박물관의 명예를 훼손시키는 일이야. 내가 이런 일을 저지른다면, 이 박물관과 나의 명예가 무너질 거라는 걸 알아야지."',
				nick+': "당신의 강력한 동기가 이해됩니다. 하지만 저희는 모든 가능성을 고려하고 싶어요. 사건 당시의 동선이나 다른 관련 정보가 있을지 여쭤볼게요."',
				'빅토르: "물론이야. 사실 그날은 보석이 사라진 걸 알게 된 날이었어. 그때부터는 보석이 어디로 갔는지 계속 생각하고 있어."',
				nick+': "당신이 사건 당일에 무슨 일을 하고 계셨나요?"',
				'빅토르: "내 업무는 박물관의 운영을 총괄하는 것이지만, 그날은 특별히 중요한 회의가 있어 참석하느라 바쁘게 보냈어."',
				nick+': "혹시 회의 중에 이상한 일이나 의심스러운 사람은 보지 못했나요?"',
				'빅토르: "아니, 그런 일은 없었어. 모든 관계자들이 일정한 장소에서 회의를 진행했고, 레베카,에밀리 또한 마찬가지지. 사건과 관련된 일은 듣지 못했어."',
				nick+': "네 답변에 감사드립니다. 만약 더 생각나거나 중요한 정보가 있다면 제게 알려주세요."',
				'빅토르: "그럼 그렇게 하지. 나는 이 박물관의 명예를 위해서도 사건을 해결하고 싶어. 필요하다면 무엇이든 도와줄게."',
				nick+': "감사합니다, 빅토르. 우리는 최선을 다해 사건을 해결하겠습니다."',
			],
			color: "skyblue"
		}
	],
	action: "ALL",
	sound: ""
}

window.scene8 = {
	introText : [
		'(빅토르와의 대화를 마쳤다.)',
		'(빅토르의 사무실을 조사해보자.)'
	],
	options : [
		{
			buttonText: '빅토르의 사무실을 조사해본다.',
			actionText: ['(빅토르의 사무실로 들어간다.)'],
			color: "red",
			gameType : "find_victor"
			
		},
	],
	action : "GAME",
	sound : "find"
}

window.scene9 = {
	introText : [
		'(이제 각 사무실을 조사하며 발견한 단서들을 종합해보아야 한다.)',
	],
	options : [
		{
			buttonText : '단서를 조합해본다.',
			actionText: [
			],
			gameType : "proviso"
		}
	],
	action : "GAME",
	sound : ""
}

window.scene10 = {
	introText : [
		'(일단 다시 로비로 가보자)',
		'(레베카가 바로 앞에 보인다.)',
	],
	options : [
		{
			buttonText : '레베카에게 말을 걸어본다.',
			actionText : [
				nick+': "레베카씨, 당신은 이 사건과 무슨 관련이 있는 건가요?"',
				'레베카: "말씀하시는것처럼, 저는 직접적으로 이 사건과 연관은 없어요. 하지만 박물관 자체가 가지고 있는 역사와 비밀들은 언젠가는 밝혀져야 할 것이라고 생각해요."',
				nick+': "그게 무슨 말씀인지 잘 모르겠네요. 자세히 얘기해주실수 있나요?"',
				'레베카: "물론이죠. 이 박물관은 오랜 세월 동안 다양한 사람들의 손을 거쳐온 곳이에요. 그만큼 역사적인 비밀과 이야기가 쌓여있을거에요."',
				'레베카: " \'빛나는 별\'의 사건을 시작으로 주요 인물들이 이 사건에 휘말리게 된 것은, 그들의 각자의 과거와 내면의 갈등이 그림자처럼 따라다니기 때문이에요."',
				'레베카: "카렌은 보안 담당자로서의 압박과 불안함을 견뎌내야 했고, 그 무게감은 어떤 비밀을 감추려는 압력으로 이어지게 되었어요. "',
				'레베카: "에밀리나 빅토르 역시 또 다른 비밀을 가지고 있었고, 그것이 이번 사건과 연관이 있는지도 알 수 없죠."',
				nick+': "그러면 그들의 과거와 갈등을 풀어내면서 사건의 진상을 밝히는 것이 좋겠군요."',
				'레베카: "맞아요. 각자의 내면을 진지하게 바라보고 진실을 찾아가는 것은 이 사건을 해결하는 열쇠일 것이에요. 그리고 그 과정에서 박물관과 관련된 더 큰 비밀들도 밝혀질지도 모르겠죠."'
			]
		}
	],
	action: "SELECT",
	sound : ""
}

window.scene11 = {
	introText : [
		'(레베카와의 대화를 마치고나니 무언가 이상함을 확실하게 깨달았다.)',
		'(단서와 레베카와의 대화를 토대로 보석 사건의 퍼즐 조각들이 점차 맞춰져가는 느낌이 든다.)',
		'(일단 카렌을 바로 찾아가봐야 할거 같다.)',
	],
	options : [
		{
			buttonText : '카렌을 찾아간다.',
			actionText : [
				'(카렌을 발견했다.)',
				nick+': "카렌, 우리는 보석 사건에 대한 진실을 알아내려고 노력하고 있어요. 혹시 당신의 비밀을 말해줄수있을까요 ? "',
				'카렌: "말할 수 없는 비밀들이 박물관 안에 숨겨져 있어요. 그리고 그 비밀들이 보석 사건과 연관되어 있을지도 모르겠어요."',
				nick+': "비밀을 밝히면 사건의 진상이 해결될 수 있을 것 같아요. 카렌, 무슨 일이 있던 건지 말씀해주실 수 있나요?"',
				'카렌: "저는 박물관의 보안을 담당하고 있었어요. 그리고 그 일 중에 빅토르와 에밀리의 관계를 알게 되었어요."',
				'카렌: "그들은 불륜 관계에 빠져 있었고, 그 사실을 밝혀내면서 나는 그들의 음모와 계획을 알게 되었어요."',
				nick+': "그래서 빅토르와 에밀리는 보석을 훔치기 위해 음모를 꾸몄다는 건가요?"',
				'카렌: "맞아요. 그들은 보석을 훔쳐서 박물관을 떠나려고 했어요. 그리고 그 사실이 드러나면서 나는 이 사건을 막기 위해 힘쓰게 되었어요."',
				nick+': "카렌, 우리와 함께 그들의 계획을 저지하고 보석을 지키는 데 도움을 줄 수 있나요?"',
				'카렌: "물론이죠. 저는 지금까지의 일로 인해 박물관과 보석의 안전을 지키는 것이 중요하다고 생각해요. 함께 일하며 그들의 음모를 밝혀내고 막아봅시다."'
			]
			
		}
	],
	action: "SELECT",
	sound : ""
}

window.scene12 = {
	introText : [
		'(에밀리의 방에서 발견된 협박편지와 카렌과의대 화를 통해 빅토르와 에밀리 사이의 음모를 직감한다.)',
		'(이제 에밀리와 빅토르에게 직접 물어보고 진실을 밝혀내야 한다.)',
	],
	options : [
		{
			buttonText : '에밀리의 방으로 간다.',
			actionText : [
				'(에밀리의 방으로 들어가 에밀리와 빅토르에게 진실을 묻는다.)'
			],
			color: "red",
		}
	],
	action: "SELECT",
	sound : ""
}

window.scene13 = {
	introText : [
		'카렌: "에밀리, 빅토르. 저희는 이제 모든 단서를 모았고, 진실을 알아내기 위해 여기 왔어요."',
		'에밀리: "무슨 말이에요? 어떤 진실을 말하시는 거죠?"',
		'빅토르: "'+nick+', 어떻게 여기까지 왔지?"',
		nick+': "에밀리, 빅토르. 당신들은 이미 알고 있는 사실을 숨기지 마세요. 당신들의 관계와 사건의 배후에 얽힌 음모를 우리에게 이야기해주세요."',
		'에밀리: "'+nick+', 너무 이상한 얘기를 하는 것 같은데요?"',
		nick+': "협박편지가 에밀리의 방에서 발견되었고, 그리고 레베카와의 대화를 통해 우리는 당신들의 관계와 음모에 대해 짐작할수 있었습니다."',
		'에밀리: "에이, 그건 우연이에요. 우리는 아무런 음모도 없었어요."',
		'빅토르: "우리가 지금 무슨 음모를 꾸미고 있다는 거야?"',
		'에밀리: "오히려 저는 피해자라고요 ! "',
		nick+': "제가 본 단서에선 카렌의 해고서에 작성된 빅토르 위고의 이름과 협박편지의 필체가 똑같더군요."',
		nick+': "에밀리 , 당신 방에 있던 작은 조각상자를 기억하시나요 ? "',
		nick+': "그 작은 조각상자는 카렌의 사무실에서 발견된 보석상자와 맞아 떨어져요. 그리고 협박편지는 빅토르가 쓴 것이었고, 카렌에게 뒤집어씌우려 했던 것으로 추정됩니다."',
		'(에밀리와 빅토르는 서로를 보며 깊게 숨을 들이마셨다.)',
		nick+': "우리는 어떤 선택을 하든 이걸 끝내야겠군요."'
	],
	options : [
		{
			buttonText : '에밀리가 무슨말을 하려한다.',
			actionText : [
				'에밀리: "그래요. 우리는 서로를 사랑하고 있었어요. 그래서 카렌에게서 벗어나기 위해 계획을 세웠고, 보석을 훔치기로 결정했어요."',
				'빅토르: "에밀리 , 지금 뭐하자는거지 ? "',
				'에밀리: "조용히 해요 빅토르, 하지만 저희는 카렌에게 굴복하지 않겠다고 생각했어요."',
				'에밀리: "저희는 보석을 팔고 행복하게 둘이서 살고 싶었던거 뿐이라고요 ! "',
				nick+': "그건 당신들의 이야기일뿐이지않을까요 . 에밀리, 빅토르"',
				'빅토르: "하.. 어쩔수 없군.."',
				'(빅토르가 에밀리의 손을 잡고 달아나기 시작한다.)',
				nick+': "카렌 , 제가 쫓아가보겠습니다. 당신은 에밀리의 사무실에 가서 보석이 든 상자를 찾아주세요."'
			],
			gameType : "runWigoAndEmily"
		}
	],
	action: "GAME",
	sound : "run"
}
window.scene14 = {
	introText: [
	],
    options: [
		{
			buttonText: '도망가던 빅토르와 에밀리를 잡았다.',
            actionText: [
				nick+': "빅토르, 어디로 도망가려고 했어? 너희의 음모는 이미 밝혀졌어."',
                '빅토르: "'+nick+', 날 잡아도 아무 소용없어. 이미 끝난 일이야."',
                '에밀리: "빅토르, 어쩔 수 없어. 우리는 선택을 해야 해."',
                nick+': "너희가 말하는 선택은 어떤 거지?"',
                '에밀리: "우리는 진실을 말하려고 해. 우리가 범죄자가 아니라는 걸."',
                '빅토르: "이미 모든 게 끝난 거야. 우린 더는 도망칠 곳이 없어."',
                nick+': "당신들은 법의 품 안에서 살아가야 할 것이다. 그리고 그것은 당신들이 결정하는 게 아니야."'
            ],
        }
    ],
    action: "END",
    sound: ""
};
}
