import {IThumbnail} from "./thumbnail";
import {IColor} from "./color";
import {ISuggestion} from "./suggestion";

export interface IArtwork {
  id: number,
  api_model: string,
  api_link: string,
  is_boosted: boolean,
  title: string,
  alt_titles: any,
  thumbnail: IThumbnail,
  main_reference_number: string,
  has_not_been_viewed_much: boolean,
  boost_rank: any,
  date_start: number,
  date_end: number,
  date_display: string,
  date_qualifier_title: string,
  date_qualifier_id: number,
  artist_display: string,
  place_of_origin: string,
  dimensions: string,
  medium_display: string,
  inscriptions: any,
  credit_line: string,
  publication_history: any,
  exhibition_history: any,
  provenance_text: any,
  publishing_verification_level: string,
  internal_department_id: number,
  fiscal_year: number,
  fiscal_year_deaccession: any,
  is_public_domain: boolean,
  is_zoomable: boolean,
  max_zoom_window_size: number,
  copyright_notice: any,
  has_multimedia_resources: boolean,
  has_educational_resources: boolean,
  colorfulness: number,
  color: IColor,
  latitude: any,
  longitude: any,
  latlon: any,
  is_on_view: boolean,
  on_loan_display: any,
  gallery_title: any,
  gallery_id: any,
  artwork_type_title: string,
  artwork_type_id: number,
  department_title: string,
  department_id: string,
  artist_id: number,
  artist_title: string,
  alt_artist_ids: number[],
  artist_ids: number[],
  artist_titles: string[],
  category_ids: string[],
  category_titles: string[],
  artwork_catalogue_ids: number[],
  term_titles: string[],
  style_id: number,
  style_title: string,
  alt_style_ids: number[],
  style_ids: number[],
  style_titles: string[],
  classification_id: string,
  classification_title: string,
  alt_classification_ids: string[],
  classification_ids: string[],
  classification_titles: string[],
  subject_id: string,
  alt_subject_ids: string[],
  subject_ids: string[],
  subject_titles: string[],
  material_id: string,
  alt_material_ids: string[],
  material_ids: string[],
  material_titles: string[],
  technique_id: string,
  alt_technique_ids: string[],
  technique_ids: string[],
  technique_titles: string[],
  theme_titles: string[],
  image_id: string,
  alt_image_ids: string[],
  document_ids: string[],
  sound_ids: string[],
  video_ids: string[],
  text_ids: string[],
  section_ids: string[],
  section_titles: string[],
  site_ids: string[],
  suggest_autocomplete_all: ISuggestion[],
  last_updated_source: string,
  last_updated: string,
  timestamp: string,
  imageURL: string
}
