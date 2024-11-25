import { Locale, enUS, tr } from 'date-fns/locale';

export type LanguageType = {
	name: string;
	code: string;
	systemCode: string;
	direction: string;
	dateFormat: string;
	dateTimeFormat: string;
	locale: Locale;
};

export const languages: LanguageType[] = [
	{
		name: 'English',
		code: 'en',
		systemCode: 'en-US',
		direction: 'ltr',
		dateFormat: 'MM/dd/yyyy',
		dateTimeFormat: 'MM/dd/yyyy - hh:mm',
		locale: enUS,
	},
	{
		name: 'Türkçe',
		code: 'tr',
		systemCode: 'tr-TR',
		direction: 'ltr',
		dateFormat: 'dd.MM.yyyy',
		dateTimeFormat: 'dd.MM.yyyy - HH.mm',
		locale: tr,
	},
];
