/**
 * Defines all possible accidentals for notes.
 * @public
 */
export enum AccidentalType {
    /**
     * No accidental
     */
    None = 0,
    /**
     * Naturalize
     */
    Natural = 1,
    /**
     * Sharp
     */
    Sharp = 2,
    /**
     * Flat
     */
    Flat = 3,
    /**
     * Natural for smear bends
     */
    NaturalQuarterNoteUp = 4,
    /**
     * Sharp for smear bends
     */
    SharpQuarterNoteUp = 5,
    /**
     * Flat for smear bends
     */
    FlatQuarterNoteUp = 6,
    /**
     * Double Sharp, indicated by an 'x'
     */
    DoubleSharp = 7,
    /**
     * Double Flat, indicated by 'bb'
     */
    DoubleFlat = 8,
    /**
     * A quarter-tone flat (half-flat).
     */
    QuarterToneFlat = 9,
    /**
     * A quarter-tone sharp (half-sharp).
     */
    QuarterToneSharp = 10,
    /**
     * Three quarter-tones flat (flat and a half).
     */
    ThreeQuarterTonesFlat = 11,
    /**
     * Three quarter-tones sharp (sharp and a half).
     */
    ThreeQuarterTonesSharp = 12
}
