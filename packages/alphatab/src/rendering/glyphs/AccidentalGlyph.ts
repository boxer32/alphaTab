import { AccidentalType } from '@coderline/alphatab/model/AccidentalType';
import { MusicFontGlyph } from '@coderline/alphatab/rendering/glyphs/MusicFontGlyph';
import { MusicFontSymbol } from '@coderline/alphatab/model/MusicFontSymbol';

/**
 * @internal
 */
export class AccidentalGlyph extends MusicFontGlyph {
    public constructor(x: number, y: number, accidentalType: AccidentalType, scale: number) {
        super(x, y, scale, AccidentalGlyph.getMusicSymbol(accidentalType));
    }

    public static getMusicSymbol(accidentalType: AccidentalType): MusicFontSymbol {
        switch (accidentalType) {
            case AccidentalType.Natural:
                return MusicFontSymbol.AccidentalNatural;
            case AccidentalType.Sharp:
                return MusicFontSymbol.AccidentalSharp;
            case AccidentalType.Flat:
                return MusicFontSymbol.AccidentalFlat;
            case AccidentalType.NaturalQuarterNoteUp:
                return MusicFontSymbol.AccidentalQuarterToneSharpNaturalArrowUp;
            case AccidentalType.SharpQuarterNoteUp:
                return MusicFontSymbol.AccidentalThreeQuarterTonesSharpArrowUp;
            case AccidentalType.FlatQuarterNoteUp:
                return MusicFontSymbol.AccidentalQuarterToneFlatArrowUp;
            case AccidentalType.QuarterToneFlat:
                return MusicFontSymbol.AccidentalQuarterToneFlatStein;
            case AccidentalType.QuarterToneSharp:
                return MusicFontSymbol.AccidentalQuarterToneSharpStein;
            case AccidentalType.ThreeQuarterTonesFlat:
                return MusicFontSymbol.AccidentalThreeQuarterTonesFlatZimmermann;
            case AccidentalType.ThreeQuarterTonesSharp:
                return MusicFontSymbol.AccidentalThreeQuarterTonesSharpStein;
            case AccidentalType.DoubleSharp:
                return MusicFontSymbol.AccidentalDoubleSharp;
            case AccidentalType.DoubleFlat:
                return MusicFontSymbol.AccidentalDoubleFlat;
        }
        return MusicFontSymbol.None;
    }
}
